const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewAuther } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//post review route
router.post("/",isLoggedIn, wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuther, wrapAsync(reviewController.destroyReview));

module.exports = router;