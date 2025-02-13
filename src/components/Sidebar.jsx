import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaCalendarPlus, FaCalendarAlt, FaTicketAlt, FaUserCheck, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Eventify</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <FaHome className="sidebar-icon" /> Tableau de bord
          </Link>
        </li>
        <li>
          <Link to="/createvent" className="sidebar-link">
            <FaCalendarPlus className="sidebar-icon" /> Créer un événement
          </Link>
        </li>
        <li>
          <Link to="/gestionevent" className="sidebar-link">
            <FaCalendarAlt className="sidebar-icon" /> Événements
          </Link>
        </li>
        <li>
          <Link to="/billet" className="sidebar-link">
            <FaTicketAlt className="sidebar-icon" /> Gérer les billets
          </Link>
        </li>
        <li>
          <Link to="/validateur" className="sidebar-link">
            <FaUserCheck className="sidebar-icon" /> Validateur
          </Link>
        </li>
        <li>
          <Link to="/profil" className="sidebar-link">
            <FaUser className="sidebar-icon" /> Profil
          </Link>
        </li>
        <li>
          <Link to="/parametre" className="sidebar-link">
            <FaCog className="sidebar-icon" /> Paramètres
          </Link>
        </li>
        <li>
          <button className="sidebar-link logout-button" onClick={handleLogout}>
            <FaSignOutAlt className="sidebar-icon" /> Déconnexion
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;