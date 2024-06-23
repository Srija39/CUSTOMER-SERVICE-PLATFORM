// backend/src/server.js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./passport'); // Assuming passport configuration is in passport.js
const emailRoutes = require('./routes/email');

const app = express();

// Middleware setup
app.use(express.json()); // For parsing application/json

// Replace 'your_generated_secure_secret_here' with the generated secret
const sessionSecret = '12464001ae31fbcf1cdb43eb337314c753a4fb4ac61145e71ee18c05a84fc4bda1e4c7419349284bb2133d3516f92fd911da36c1c3fa5bc99d823b2314d84712';

app.use(session({
  secret: sessionSecret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to your frontend
  });

// Email Routes
app.use('/api/email', emailRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});