const express = require('express');
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;

const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/auth/callback'
}, (accessToken, refreshToken, expires_in, profile, done) => {
  // Save tokens and user profile to DB here
  return done(null, { profile, accessToken });
}));

router.get('/login', passport.authenticate('spotify', {
  scope: ['user-top-read', 'user-read-email']
}));

router.get('/callback', passport.authenticate('spotify', {
  failureRedirect: '/login'
}), (req, res) => {
  res.redirect('http://localhost:3000/dashboard'); //redirect to frontend
});

module.exports = router;
