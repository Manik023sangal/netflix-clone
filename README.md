🎬 Netflix Clone

A Netflix Clone built using React.js, Firebase Authentication, Firestore, and The Movie Database (TMDB) API.
This project replicates the core features of Netflix, including user authentication, browsing movies, search functionality, and video playback.

🚀 Features

🔐 Authentication (Sign Up, Login, Logout) using Firebase Auth

🗂 Firestore Database to store user data

🎞 Dynamic Movie Cards (Now Playing, Top Rated, Upcoming, Popular) using TMDB API

🔍 Search Functionality with live TMDB results

📺 Video Player Page with YouTube trailer embedding

🎨 Responsive UI styled with CSS

🌑 Dark Theme Netflix UI

🍿 Toast Notifications for login/logout using react-toastify

🛠️ Tech Stack

Frontend: React.js, React Router, CSS

Backend/Database: Firebase Authentication + Firestore

API: TMDB API

Tools: Vite, React Toastify

📂 Folder Structure
src/
 ├── assets/           # Images & icons
 ├── components/       # Reusable components (Navbar, Footer, TitleCards)
 ├── pages/            # Main pages (Home, Login, Player)
 ├── firebase.js       # Firebase config & auth methods
 ├── App.jsx           # App routes & auth listener
 ├── main.jsx          # Entry point with BrowserRouter
 └── index.css         # Global styles

🔧 Installation & Setup

Clone the repository

git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone


Install dependencies

npm install


Setup Firebase

Go to Firebase Console

Create a project → Enable Authentication (Email/Password)

Enable Firestore Database

Get your config from Firebase and update firebase.js:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};


Setup TMDB API

Create an account on TMDB

Get your API key & Bearer Token

Replace the token in API calls (e.g., TitleCards.jsx, Navbar.jsx, Player.jsx).

Run the app

npm run dev

🔑 Login Page

🏠 Home Page

🔍 Search Results

▶️ Player Page

🔮 Future Improvements

Add multiple user profiles

Implement “My List” functionality

Add pagination for search & categories

Use Redux / Context API for global state management

Improve mobile responsiveness

🙌 Acknowledgements

Firebase

TMDB API

React Toastify
