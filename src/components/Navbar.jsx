import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import "./Navbar.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Etat pour la modal de connexion
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // Etat pour la modal de création de compte
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

  const openHelpModal = () => {
    setIsHelpOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Eventify</h1>

      <div className="nav-categories">
        <a href="#events-section" className="nav-link">Événements</a>
        <a href="#concerts-section" className="nav-link">Concerts</a>
        <a href="#sports-section" className="nav-link">Sport</a>
        <a href="#festivals-section" className="nav-link">Festivals</a>
        <a href="#other-section" className="nav-link">Autres</a>
      </div>

      <div className="nav-right">
        <div className="nav-search-container" ref={searchRef}>
          <FaSearch className="search-icon" onClick={() => setShowSearch(true)} />
          {showSearch && (
            <input type="text" className="search-input active" placeholder="Rechercher..." />
          )}
        </div>

        <Link to="/login" className="nav-link">
  <FaUser className="icon" /> Sign In
</Link>
        <a href="#" className="nav-link" onClick={openHelpModal}>Help</a>
      </div>

      {/* Modal d'aide */}
      <Modal
        isOpen={isHelpOpen}
        onRequestClose={closeHelpModal}
        contentLabel="Help Modal"
        className="help-modal"
        overlayClassName="help-overlay"
      >
        <button className="close-btn" onClick={closeHelpModal}>
          &times;
        </button>
        <h2 className="modal-title">Centre d'Aide</h2>
        <p>Bienvenue dans le centre d'aide. Voici quelques informations pour vous guider :</p>
        <ul>
          <li><strong>Événements:</strong> Découvrez les événements près de chez vous.</li>
          <li><strong>Inscription:</strong> Connectez-vous pour acheter vos billets.</li>
          <li><strong>Support:</strong> Contactez notre équipe via la section "Contact".</li>
        </ul>
      </Modal>
    </nav>
  );
}

export default Navbar;
