import React, { useState } from "react";
import useValidateur from "./useValidateur"; // Import du hook de validation
import "./Validateur.css";

const Validateur = () => {
  const { errors, validate, isValid, resetErrors } = useValidateur();
  const [ticketCode, setTicketCode] = useState("");

  // Fonction de gestion de changement
  const handleChange = (e) => {
    setTicketCode(e.target.value);
    validate("ticketCode", e.target.value);
  };

  // Fonction de soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      alert("Ticket validé avec succès !");
    }
  };

  // Fonction de réinitialisation
  const handleReset = () => {
    setTicketCode("");
    resetErrors();
  };

  return (
    <div className="validateur-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Accueil</li>
          <li>Validation</li>
          <li>Paramètres</li>
        </ul>
      </div>

      <div className="validateur-content">
        <h1>Validateur de Ticket</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label>Code du Ticket</label>
            <input
              type="text"
              name="ticketCode"
              value={ticketCode}
              onChange={handleChange}
              placeholder="Entrez votre code de ticket"
            />
            {errors.ticketCode && (
              <div className="error-message">{errors.ticketCode}</div>
            )}
          </div>
          <button type="submit" disabled={!isValid()}>
            Valider le Ticket
          </button>
          <button type="button" onClick={handleReset}>
            Réinitialiser
          </button>
        </form>
      </div>
    </div>
  );
};

export default Validateur;
