const User = require("../models/user")

module.exports.renderSignUpForm = (req, res) =>{
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) =>{
    try{
         let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to ApnaGhar");
    res.redirect("/listings");
    })
    
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
   
};

module.exports.renderLoginForm = (req, res) =>{
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to ApnaGhar! You are logged in!");
    const redirectUrl = req.session.returnTo || "/listings";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) =>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};