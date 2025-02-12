import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Import du fichier CSS

const Sidebar = () => {
  const navigate = useNavigate();

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token"); // Suppression du token d'authentification
    navigate("/login"); // Redirection vers la page de connexion
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Eventify</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <i className="fas fa-home"></i> Tableau de bord
          </Link>
        </li>
        <li>
          <Link to="/createvent" className="sidebar-link">
            <i className="fas fa-calendar-plus"></i> Créer un événement
          </Link>
        </li>
        <li>
          <Link to="/evenements" className="sidebar-link">
            <i className="fas fa-calendar-alt"></i> Événements
          </Link>
        </li>
        <li>
          <Link to="/billet" className="sidebar-link">
            <i className="fas fa-ticket-alt"></i> Gérer les billets
          </Link>
        </li>
        <li>
          <Link to="/validateur" className="sidebar-link">
            <i className="fas fa-user-check"></i> Validateur
          </Link>
        </li>
        <li>
          <Link to="/profil" className="sidebar-link">
            <i className="fas fa-user"></i> Profil
          </Link>
        </li>
        <li>
          <Link to="/parametre" className="sidebar-link">
            <i className="fas fa-cog"></i> Paramètres
          </Link>
        </li>
        <li>
          <button className="sidebar-link logout-button" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Déconnexion
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
