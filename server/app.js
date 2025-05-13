const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const spotifyRoutes = require('./routes/spotify');
dotenv.config();
const passport = require('passport');
require('./middleware/passport'); // Initialize strategy

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use('/api/auth/',  authRoutes);
app.use('/api/spotify/', spotifyRoutes);

app.get('/', (req,res) => res.send('Spotify API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));