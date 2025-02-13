import React, { useState } from "react";
import useValidateur from "./useValidateur";  // Importez le hook de validation
import "./Validateur.css"; 
const Validateur = () => {
  const { errors, validate, isValid, resetErrors } = useValidateur();
  const [ticketCode, setTicketCode] = useState("");

  // Fonction de gestion de changement de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketCode(value);
    validate(name, value);  // Validation lors de la modification
  };

  // Fonction de soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      // Effectuer la vérification de ticket ici (par exemple, appel API)
      console.log("Ticket valide !");
      alert("Ticket validé avec succès !");
    } else {
      console.log("Ticket invalide !");
    }
  };

  // Fonction de réinitialisation
  const handleReset = () => {
    setTicketCode("");
    resetErrors();  // Réinitialise les erreurs
  };

  return (
    <div className="ticket-validation">
      <h1>Validateur de Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Code du Ticket</label>
          <input
            type="text"
            name="ticketCode"
            value={ticketCode}
            onChange={handleChange}
            placeholder="Entrez votre code de ticket"
          />
          {errors.ticketCode && <div className="error-message">{errors.ticketCode}</div>}
        </div>
        <button type="submit" disabled={!isValid()}>
          Valider le Ticket
        </button>
        <button type="button" onClick={handleReset}>
          Réinitialiser
        </button>
      </form>
    </div>
  );
};

export default Validateur;
