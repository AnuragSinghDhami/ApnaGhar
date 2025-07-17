const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken : mapToken});

// In controllers/listings.js

module.exports.index = async (req, res) => {
    // Destructure both search and feature from the query string
    const { search, feature } = req.query;
    let filter = {}; // Initialize an empty filter object

    // 1. Add search condition if a search query exists
    if (search) {
        // This will find listings where the search term appears in the title, location, or country
        filter.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }

    // 2. Add feature condition if a feature query exists
    if (feature) {
        // This combines with the search filter (e.g., search for "beach" in listings that have a "Pool")
        filter.features = feature;
    }

    // 3. Execute the query with the combined filter
    const allListings = await Listing.find(filter);

    // 4. Render the page, passing the search term to the template
    // This is useful for showing a "No results for..." message
    res.render("./listings/index.ejs", { allListings, search });
};

module.exports.renderNewForm = (req, res) =>{
    
    res.render("listings/new.ejs")
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    // Add mapToken to the data being sent to the template
    res.render("listings/show.ejs", { listing, mapToken: process.env.MAP_TOKEN });
};

module.exports.createListing  =  async (req, res, next) =>{
        let response = await geocodingClient
            .forwardGeocode({
                query: req.body.listing.location,
                limit: 1,
            })
            .send();
              console.log("🌍 Mapbox response:", JSON.stringify(response.body, null, 2)); 
        let url = req.file.path;
        let filename = req.file.filename;

        const listingData = req.body.listing;

// ✅ Always normalize features
if (!Array.isArray(listingData.features)) {
  listingData.features = listingData.features ? [listingData.features] : [];
}


const newListing = new Listing(listingData);



        newListing.owner = req.user._id;
        newListing.image = {url, filename};
        newListing.geometry = response.body.features[0].geometry;
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    const availableFeatures =  [
            "Wifi",
            "Furnished",
            "Private Kitchen",
            "Attached Bathroom",
            "Single Room",
            "Double Sharing",
            "Independent",
            "Within 1km",
            
        ];

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit.ejs", { listing, originalImageUrl, availableFeatures });
};


module.exports.updateListing = async (req, res) =>{
    let {id} = req.params;

   const updatedData = req.body.listing;

if (updatedData.features && !Array.isArray(updatedData.features)) {
    updatedData.features = [updatedData.features];
}

let listing = await Listing.findByIdAndUpdate(id, updatedData);


    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};

        await listing.save();

    }
     
     req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) =>{

    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "New Listing Deleted!");
    res.redirect("/listings");
};