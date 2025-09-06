import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZlM2RkMTZhYjUwMzlmNzVhYmI3MjA5MTU5YTQ1MSIsIm5iZiI6MTc1NzE3NjM3My4yMTI5OTk4LCJzdWIiOiI2OGJjNjIzNTM0Zjc1ZDFlM2U5OGI5NDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2ecg7WE_r9gbQJLqSBc4iCL5E1AIbsuWfdtJ2bUaOmk"
          }
        }
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <img
            src={search_icon}
            alt="search"
            className="icons"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
              />
            </form>
          )}
        </div>
        <p>Children</p>
        <img src={bell_icon} alt="notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>

      {showSearch && results.length > 0 && (
        <div className="search-results">
          {results.slice(0, 6).map((movie) => (
            <div key={movie.id} className="search-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
