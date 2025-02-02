import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Configuration de Modal pour l'accessibilité
Modal.setAppElement("#root");

function Navbar() {
  // États pour gérer le défilement, la recherche, le menu hamburger et les modales
  const [isScrolled, setIsScrolled] = useState(false); // État pour le défilement
  const [showSearch, setShowSearch] = useState(false); // État pour afficher/masquer la recherche
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger
  const searchRef = useRef(null); // Référence pour la barre de recherche

  // Gestion du défilement pour ajouter une classe au navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion du clic en dehors de la barre de recherche pour la masquer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fonction pour basculer l'état du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <Link to="/" className="logo">
        <h1>Eventify</h1> {/* Remplacez par votre logo */}
      </Link>

      {/* Bouton menu hamburger */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation principale */}
      <div className={`nav-categories ${isMenuOpen ? "open" : ""}`}>
        <a href="#events-section" className="nav-link" onClick={toggleMenu}>
          Événements
        </a>
        <a href="#concerts-section" className="nav-link" onClick={toggleMenu}>
          Concerts
        </a>
        <a href="#sports-section" className="nav-link" onClick={toggleMenu}>
          Sport
        </a>
        <a href="#festivals-section" className="nav-link" onClick={toggleMenu}>
          Festivals
        </a>
        <a href="#other-section" className="nav-link" onClick={toggleMenu}>
          Autres
        </a>
      </div>

      {/* Section droite (recherche, connexion, création d'événement) */}
      <div className="nav-right">
        {/* Barre de recherche */}
        <div className="nav-search-container" ref={searchRef}>
          <FaSearch
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              className="search-input active"
              placeholder="Rechercher..."
            />
          )}
        </div>

        {/* Lien de connexion */}
        <Link to="/login" className="nav-link">
          <FaUser className="icon" /> Sign In
        </Link>

        {/* Nouveau bouton "Créer un événement" avec l'icône "+" dans un rond */}
        <Link to="/createvent">
          <button className="create-event-btn">
            <div className="plus-circle">
              <FaPlus className="plus-icon" />
            </div>
            Créer événement
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;