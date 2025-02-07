import React from "react";
import Sidebar from "../components/Sidebar";
import "./Gestionevent.css"; // Assure-toi d'ajouter les styles ici

const Gestionevent = () => {
  return (
    <div className="gestionevent-container">
      <Sidebar />
      <div className="content">
        <h1>Gestion des Événements</h1>
        <p>Bienvenue dans la section de gestion des ventes et des billets.</p>
      </div>
    </div>
  );
};

export default Gestionevent;
