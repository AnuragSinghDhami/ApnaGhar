const Listing = require("../models/listing");
const Review = require("../models/review.js");



module.exports.createReview = async (req, res, next) => {
    const { comment, rating } = req.body.review;

    const errors = [];
    if (!comment || comment.trim() === "") {
        errors.push("Comment is required.");
    }

    const ratingNum = Number(rating);
    if (!rating || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        errors.push("Rating must be a number between 1 and 5.");
    }

    if (errors.length > 0) {
        return next(new ExpressError(400, errors.join(" ")));
    }

    const listing = await Listing.findById(req.params.id);

    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Added!");

    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) =>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};