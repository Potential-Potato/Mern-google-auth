// Import necessary modules
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

// Configure Google OAuth 2.0 strategy
passport.use(
    new GoogleStrategy( // Specify client ID, client secret, callback URL, and required scope
    {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    function(accessToken, refreshToken, profile, callback){ //callback function
        callback(null, profile) // Pass profile data to callback function
    }
)
);

// Serialize user into session
passport.serializeUser((user, done) => {
    done(null, user); 
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
    done(null, user);
});