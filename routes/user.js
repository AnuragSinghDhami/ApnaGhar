const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// Sign Up Routes
router.route("/signup")
    .get(userController.renderSignUpForm)       // render signup form
    .post(wrapAsync(userController.signup));    // handle signup

// Login Routes
router.route("/login")
    .get(userController.renderLoginForm)        // render login form
    .post(
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userController.login                    // handle login
    );


router.get("/logout", userController.logout);
module.exports = router