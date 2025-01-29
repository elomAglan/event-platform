import { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du clic en dehors de la recherche pour la masquer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Eventify</h1>

      <div className="nav-categories">
        <a href="#" className="nav-link">Concerts</a>
        <a href="#" className="nav-link">Conférences</a>
        <a href="#" className="nav-link">Sport</a>
        <a href="#" className="nav-link">Festivals</a>
        <a href="#" className="nav-link">Autres</a>
      </div>

      <div className="nav-right">
        {/* Barre de recherche à côté de Sign In */}
        <div className="nav-search-container" ref={searchRef}>
          <FaSearch 
            className="search-icon" 
            onClick={() => setShowSearch(true)} 
          />
          {showSearch && (
            <input 
              type="text" 
              className="search-input active" 
              placeholder="Rechercher..." 
              autoFocus
            />
          )}
        </div>

        <a href="#" className="nav-link">
          <FaUser className="icon" /> Sign In
        </a>
        <a href="#" className="nav-link">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
