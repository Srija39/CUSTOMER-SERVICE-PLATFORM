// config/passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { clientID, clientSecret, callbackURL } = require('./googleAuth');
const User = require('../models/user'); // Import your User model

passport.use(new GoogleStrategy({
  clientID,
  clientSecret,
  callbackURL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if the user already exists in your database
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // If user doesn't exist, create a new User instance
      user = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value // Assuming you want to store the primary email
        // You can add more fields here as per your schema
      });

      await user.save(); // Save the new user to the database
    }

    // Return the user object via done callback
    return done(null, user);
  } catch (err) {
    return done(err, null); // Handle error
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user by storing user.id in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    return done(null, user); // Deserialize user by retrieving user from database
  } catch (err) {
    return done(err, null); // Handle error
  }
});