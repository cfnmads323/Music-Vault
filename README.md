# 🎵 Music Vault

A full-stack web app that helps users rediscover forgotten music and discover personalized recommendations by analyzing Spotify data and user inputs. Built using **Django + React**, with **Spotify API**, **MongoDB**, and chart visualizations.

---

## 🚀 Features

- 🔐 User registration and login
- 🎧 Spotify OAuth integration to fetch top 100 songs
- ✍️ Manual input of favorite songs
- 🔁 Recommendations based on genre, audio features, and history
- 📊 Graphs and charts for listening behavior
- 🌗 Light/Dark theme toggle
- 💾 Secure preference storage in MongoDB
- 🛠 Logging and error tracking (via Sentry)
- 📱 Fully responsive UI (mobile + desktop)

---

## 🧱 Tech Stack

- **Frontend**: React.js, Recharts, Axios
- **Backend**: Django, Django REST Framework
- **Database**: MongoDB (via PyMongo or Djongo)
- **Auth**: Email/password + Spotify OAuth 2.0
- **APIs**: Spotify Web API
- **Logging**: Python logging module, Sentry (optional)

---

## 🛠️ Setup Instructions

### ⚙️ Backend (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/music-vault.git
   cd music-vault/backend
   
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
3. Install dependencies:
   ```bash
   pip install -r requirements.txt

4. Add a .env file in the backend folder:
5.   ```ini
     SECRET_KEY=your_secret_key
     EBUG=True
     MONGO_URI=your_mongo_connection_uri
     MONGO_DB_NAME=musicvault
     SPOTIFY_CLIENT_ID=your_spotify_client_id
     SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
     SENTRY_DSN=your_sentry_dsn  # Optional

6. Run migrations:
   ```bash
   python manage.py runserver
    
7. Start the Django server:
   ```bash
   python manage.py runserver

### 💻 Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
  
2. Install dependencies:
   ```bash
   npm install
   
3. Start the React app::
   ```bash
   npm start

The React app will run at http://localhost:3000
The Django API will run at http://localhost:8000 

🔐 Security Notes
All API requests are protected using HTTPS and token-based authentication.

Access and refresh tokens for Spotify are securely stored and refreshed.

MongoDB stores only user preferences and non-sensitive data.

