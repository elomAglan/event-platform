import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faPlusCircle,
  faCog,
  faTicketAlt,
  faUser,
  faCheckCircle,
  faSignOutAlt,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"; // ✅ Import du CSS

const PATHS = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  CREATE_EVENT: "/createvent",
  MANAGE_EVENT: "/gestionevent",
  TICKETS: "/billet",
  SETTINGS: "/parametre",
  PROFILE: "/profil",
  VALIDATOR: "/validateur",
};

const Sidebar = () => {
  const navigate = useNavigate();

  // ✅ Fonction de déconnexion
  const handleLogout = () => {
    console.log("Déconnexion réussie");
    navigate(PATHS.HOME);
  };

  // ✅ Tableau des liens avec icônes
  const navLinks = [
    { to: PATHS.DASHBOARD, label: "Dashboard", icon: faChartBar },
    { to: PATHS.CREATE_EVENT, label: "Créer un événement", icon: faPlusCircle },
    { to: PATHS.MANAGE_EVENT, label: "Gérer les événements", icon: faClipboardList },  // Nouveau changement ici
    { to: PATHS.TICKETS, label: "Mes Billets", icon: faTicketAlt },
    { to: PATHS.SETTINGS, label: "Paramètres", icon: faCog },
    { to: PATHS.PROFILE, label: "Profil", icon: faUser },
    { to: PATHS.VALIDATOR, label: "Validateur", icon: faCheckCircle },
];


  return (
    <div className="sidebar">
      {/* En-tête */}
      <div className="sidebar-header">
        <h2>Eventify</h2>
      </div>

      {/* Bouton Accueil */}
      <button className="home-button" onClick={() => navigate(PATHS.HOME)}>
        <FontAwesomeIcon icon={faHome} className="icon" /> Accueil
      </button>

      {/* Menu de navigation */}
      <ul className="sidebar-menu">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <FontAwesomeIcon icon={link.icon} className="icon" /> {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bouton de déconnexion */}
      <button className="logout-button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Déconnexion
      </button>
    </div>
  );
};

export default Sidebar;
