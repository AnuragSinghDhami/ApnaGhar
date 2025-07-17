const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});



// Index and Create ("/")
router.route("/")
    .get(wrapAsync(listingController.index)) // index route
    .post(isLoggedIn,  upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing)); // create route
    

// New route (separate path) -> should be before show and update and delete(why?)
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show, Update, and Delete ("/:id")
router.route("/:id")
    .get(wrapAsync(listingController.showListing)) // show route
    .put(isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing)) // update route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)); // delete route

// Edit route (separate path)
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;