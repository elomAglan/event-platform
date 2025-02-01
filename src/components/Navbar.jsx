import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Configuration de Modal pour l'accessibilité
Modal.setAppElement("#root");

function Navbar() {
  // États pour gérer le défilement, la recherche et les modales
  const [isScrolled, setIsScrolled] = useState(false); // État pour le défilement
  const [showSearch, setShowSearch] = useState(false); // État pour afficher/masquer la recherche
  const [isHelpOpen, setIsHelpOpen] = useState(false); // État pour la modal d'aide
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

  // Fonctions pour ouvrir et fermer la modal d'aide
  const openHelpModal = () => setIsHelpOpen(true);
  const closeHelpModal = () => setIsHelpOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <h1 className="logo">Eventify</h1>

      {/* Catégories de navigation */}
      <div className="nav-categories">
        <a href="#events-section" className="nav-link">Événements</a>
        <a href="#concerts-section" className="nav-link">Concerts</a>
        <a href="#sports-section" className="nav-link">Sport</a>
        <a href="#festivals-section" className="nav-link">Festivals</a>
        <a href="#other-section" className="nav-link">Autres</a>
      </div>

      {/* Section droite (recherche, connexion, aide) */}
      <div className="nav-right">
        {/* Barre de recherche */}
        <div className="nav-search-container" ref={searchRef}>
          <FaSearch className="search-icon" onClick={() => setShowSearch(true)} />
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

        {/* Lien d'aide */}
        <a href="#" className="nav-link" onClick={openHelpModal}>
          Help
        </a>
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
        <p>
          Bienvenue dans le centre d'aide. Voici quelques informations pour vous guider :
        </p>
        <ul>
          <li>
            <strong>Événements:</strong> Découvrez les événements près de chez vous.
          </li>
          <li>
            <strong>Inscription:</strong> Connectez-vous pour acheter vos billets.
          </li>
          <li>
            <strong>Support:</strong> Contactez notre équipe via la section "Contact".
          </li>
        </ul>
      </Modal>
    </nav>
  );
}

export default Navbar;