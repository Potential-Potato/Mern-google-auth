// Import necessary modules
const router = require('express').Router()
const passport = require('passport');
const User = require('../models/user')

// Route for successful login
router.get('/login/success', async (req, res) => {
        try{
            const existingUser = await User.findOne({ id: req.user.id });
            if(existingUser) {
                // If user exists, just send success response
                res.status(200).json({
                    error: false,
                    message: "Successfully Logged In",
                    user: req.user
                });
            } else {
                // If user doesn't exist, create a new user with Google account ID
                const newUser = await User.create({
                    name: req.user.name.givenName,
                    id: req.user.id, // Using Google ID from _json object
                    email: req.user.emails[0].value 
                });
                //login code
                res.status(200).json({
                    error: false,
                    message: "Successfully Logged In",
                    user: req.user
                })
            }
        }catch(error){
            res.status(403).json({
                error: true,
                message: "Not Authorize"
            })
       }
});

// Route for failed login
router.get('/login/failed', (req, res) => {// Send login failure response
    res.status(401).json({
        error: true,
        message: "Login Failure"
    });
});

// Google OAuth callback route
router.get(  // Prompt user to select account and specify required scope
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed"
    })
);

// Route to initiate Google OAuth authentication
router.get("/google", passport.authenticate("google", {prompt: 'select_account', scope: ["profile", "email"]}) // Prompt user to select account and specify required scope
);

// Logout route
router.get("/logout", (req, res) => { // Logout user and redirect to client URL
    req.logout();
    res.redirect(process.env.CLIENT_URL)
});

module.exports = router