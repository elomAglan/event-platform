import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import "./Navbar.css";

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

  const openSignInModal = () => {
    setIsSignInOpen(true); // Ouvre la modal de connexion
  };

  const closeSignInModal = () => {
    setIsSignInOpen(false); // Ferme la modal de connexion
  };

  const openSignUpModal = () => {
    closeSignInModal(); // Ferme automatiquement la modal de connexion
    setIsSignUpOpen(true); // Ouvre la modal de création de compte
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false); // Ferme la modal de création de compte
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logo" id="logo">Eventify</h1>

      <div className="nav-categories" id="nav-categories">
        <a href="#events-section" className="nav-link">Événements</a>
        <a href="#concerts-section" className="nav-link">Concerts</a>
        <a href="#sports-section" className="nav-link">Sport</a>
        <a href="#" className="nav-link">Festivals</a>
        <a href="#" className="nav-link">Autres</a>
      </div>

      <div className="nav-right" id="nav-right">
        <div className="nav-search-container" ref={searchRef}>
          <FaSearch className="search-icon" onClick={() => setShowSearch(true)} />
          {showSearch && (
            <input type="text" className="search-input active" placeholder="Rechercher..." />
          )}
        </div>

        <a href="#" className="nav-link" onClick={openSignInModal}>
          <FaUser className="icon" /> Sign In
        </a>
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

      {/* Modal de connexion */}
      <Modal
        isOpen={isSignInOpen}
        onRequestClose={closeSignInModal}
        contentLabel="Sign In Modal"
        className="sign-in-modal"
        overlayClassName="help-overlay"
      >
        <button className="close-btn" onClick={closeSignInModal}>
          &times;
        </button>
        <h2 className="modal-title">Se connecter</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Entrez votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit" className="submit-btn">Se connecter</button>
        </form>
        <p className="sign-up-link">
          Pas encore de compte ? <a href="#" onClick={openSignUpModal}>Créez-en un ici</a>
        </p>
      </Modal>

      {/* Modal de création de compte */}
      <Modal
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="Sign Up Modal"
        className="sign-up-modal"
        overlayClassName="help-overlay"
      >
        <button className="close-btn" onClick={closeSignUpModal}>
          &times;
        </button>
        <h2 className="modal-title">Créer un compte</h2>
        <form>
          <div className="form-group">
            <label htmlFor="new-email">Email</label>
            <input type="email" id="new-email" placeholder="Entrez votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Mot de passe</label>
            <input type="password" id="new-password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit" className="submit-btn">Créer un compte</button>
        </form>
      </Modal>
    </nav>
  );
}

export default Navbar;
