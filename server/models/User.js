const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String }, // for Spotify-only accounts
    spotifyId: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
    favorites: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);