import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        toast.success("Welcome back! 🎬");
        navigate('/');
      } else {
        console.log("Logged Out");
        toast.info("You have been logged out.");
        navigate('/login');
      }
    });

    return () => unsubscribe(); // ✅ cleanup listener
  }, [navigate]); // ✅ added dependency

  return (
    <div>
      <ToastContainer theme="dark" position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
