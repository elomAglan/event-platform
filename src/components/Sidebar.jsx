import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import du fichier CSS

const Sidebar = () => {
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
          <Link to="/gestionevent" className="sidebar-link">
            <i className="fas fa-ticket-alt"></i> Gérer les billets
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            <i className="fas fa-cog"></i> Paramètres
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
