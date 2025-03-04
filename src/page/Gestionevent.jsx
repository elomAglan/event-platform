import React from "react";
import { 
  faCalendarAlt, 
  faUsers, 
  faCreditCard, 
  faBell 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../components/Sidebar";
import "./Gestionevent.css"; // Assure-toi d'ajouter les styles ici

const Gestionevent = () => {
  return (
    <div className="gestionevent-container">
      <Sidebar />
      <div className="gestionevent-content">
        {/* En-tête */}
        <div className="gestionevent-header">
          <h1>
            <FontAwesomeIcon icon={faCalendarAlt} /> Gestion des Événements
          </h1>
        </div>

        {/* Actions principales (les 3 premiers boutons enlevés) */}
        <div className="gestionevent-actions">
          {/* Boutons enlevés : Ajouter, Modifier, Supprimer */}
          {/* <button className="btn-icon btn-primary">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn-icon btn-secondary">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="btn-icon btn-danger">
            <FontAwesomeIcon icon={faTrash} />
          </button> */}
        </div>

        {/* Liste des événements */}
        <div className="gestionevent-list">
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Date</th>
                <th>Participants</th>
                <th>Billets</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Concert Rock</td>
                <td>25 Mars 2025</td>
                <td>120</td>
                <td>200</td>
                <td className="actions">
                  <button className="btn-icon btn-info">
                    <FontAwesomeIcon icon={faUsers} />
                  </button>
                  <button className="btn-icon btn-warning">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </button>
                  <button className="btn-icon btn-success">
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gestionevent;
