import React, { useState, useCallback } from "react";
import { FaTicketAlt, FaTrash } from "react-icons/fa";
import Modal from "../page/Modal.jsx";  // Assure-toi que le chemin du Modal est correct

import "./Billet.css";

const Billet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [billets, setBillets] = useState([]);
  const [billetDetails, setBilletDetails] = useState({ name: "", price: "", quantity: "" });
  const [errors, setErrors] = useState({});

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
    setErrors({}); // Réinitialiser les erreurs à l'ouverture/fermeture du modal
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBilletDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Effacer uniquement l'erreur du champ modifié
  };

  const validateFields = () => {
    let errors = {};
    if (!billetDetails.name.trim()) errors.name = "Nom requis";
    if (!billetDetails.price || isNaN(parseFloat(billetDetails.price)) || parseFloat(billetDetails.price) <= 0)
      errors.price = "Prix invalide";
    if (!billetDetails.quantity || isNaN(parseInt(billetDetails.quantity)) || parseInt(billetDetails.quantity) <= 0)
      errors.quantity = "Quantité invalide";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setBillets((prev) => [...prev, { ...billetDetails, id: Date.now() }]);
    toggleModal();
    setBilletDetails({ name: "", price: "", quantity: "" });  // Réinitialiser les champs après ajout
  };

  const handleDelete = useCallback((id) => {
    setBillets((prev) => prev.filter((billet) => billet.id !== id));
  }, []);

  return (
    <div className="billet-container">
      <h1>Gestion des Billets</h1>
      <button className="btn-open-modal" onClick={toggleModal}>
        Ajouter un billet <FaTicketAlt className="ml-2" />
      </button>

      {billets.length > 0 ? (
        <ul className="billet-list">
          {billets.map((billet) => (
            <li key={billet.id} className="billet-item">
              <span>{billet.name} - {billet.price}€ - {billet.quantity} places</span>
              <button className="btn-delete" onClick={() => handleDelete(billet.id)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-billets">Aucun billet disponible.</p>
      )}

      {modalOpen && (
        <Modal title="Ajouter un Billet" onClose={toggleModal}>
          <input
            type="text"
            name="name"
            placeholder="Nom du billet"
            value={billetDetails.name}
            onChange={handleInputChange}
            className="input-field"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="number"
            name="price"
            placeholder="Prix du billet"
            value={billetDetails.price}
            onChange={handleInputChange}
            className="input-field"
          />
          {errors.price && <p className="error">{errors.price}</p>}

          <input
            type="number"
            name="quantity"
            placeholder="Quantité disponible"
            value={billetDetails.quantity}
            onChange={handleInputChange}
            className="input-field"
          />
          {errors.quantity && <p className="error">{errors.quantity}</p>}

          <div className="modal-footer">
            <button className="btn-cancel" onClick={toggleModal}>Annuler</button>
            <button className="btn-submit" onClick={handleSubmit}>Ajouter</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Billet;
