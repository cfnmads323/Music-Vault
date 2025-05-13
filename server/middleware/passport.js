const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('../models/User');

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/auth/spotify/callback'
},
  async (accessToken, refreshToken, expires_in, profile, done) => {
    try {
      let user = await User.findOne({ spotifyId: profile.id });
      if (!user) {
        user = await User.create({
          spotifyId: profile.id,
          email: profile.emails[0].value,
          accessToken,
          refreshToken
        });
      } else {
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
