// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passportSetup = require('./passport'); // Import passport setup
const authRoute = require('./routes/auth'); // Import authentication routes
const postRoute = require('./routes/post')

// Create an Express application
const app = express();


// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Database Connected')
})
.catch((err) => {
    console.log('Database not connected', err)
})

// // Middleware setup
app.use(express.json())
// Configure cookie session to manage user sessions
app.use(
    cookieSession({
        name: "session",
        keys: ["seer"], // Array of secret keys to sign session data
        maxAge: 24*60*60*100 // Session expiration time in milliseconds
    })
);

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Enable CORS for specified origin, methods, and credentials
app.use(
    cors({
        origin: "http://localhost:5173", //frontend url
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
);

// Route setup

// Mount authentication routes under /auth path
app.use('/auth', authRoute);
app.use('/post', postRoute)

// Start the server

// Use specified port from environment variable or default to 8080
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port: ${port}...`));
