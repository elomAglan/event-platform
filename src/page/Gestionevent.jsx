import React from "react";
import Sidebar from "../components/Sidebar";
import "./Gestionevent.css"; // Assure-toi d'ajouter les styles ici

const Gestionevent = () => {
  return (
    <div className="gestionevent-container">
      <Sidebar />
      <div className="gestionevent-content">
        <div className="gestionevent-header">
          <h1><i className="fas fa-calendar-alt"></i> Gestion des Événements</h1>
        </div>
        <p className="gestionevent-description">
          Gérez facilement vos ventes et billets d'événements ici.
        </p>
        
        <div className="gestionevent-actions">
          <button className="btn btn-primary"><i className="fas fa-plus"></i> Ajouter un événement</button>
          <button className="btn btn-secondary"><i className="fas fa-edit"></i> Modifier un événement</button>
          <button className="btn btn-danger"><i className="fas fa-trash"></i> Supprimer un événement</button>
        </div>
      </div>
    </div>
  );
};

export default Gestionevent;
