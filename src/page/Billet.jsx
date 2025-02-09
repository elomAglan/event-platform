import React, { useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import "./Billet.css"; // Ton fichier CSS personnalisé

const Billet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [billetDetails, setBilletDetails] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBilletDetails({ ...billetDetails, [name]: value });
  };

  const handleSubmit = () => {
    // Logique pour enregistrer ou soumettre les billets
    console.log(billetDetails);
    toggleModal();
  };

  return (
    <div className="billet-container">
      <h1>Gestion des Billets</h1>
      <button className="btn-open-modal" onClick={toggleModal}>
        Ajouter un billet <FaTicketAlt className="ml-2" />
      </button>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Ajouter un Billet</h2>
              <button className="btn-close" onClick={toggleModal}>X</button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="name"
                placeholder="Nom du billet"
                value={billetDetails.name}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                name="price"
                placeholder="Prix du billet"
                value={billetDetails.price}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantité disponible"
                value={billetDetails.quantity}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={toggleModal}>Annuler</button>
              <button className="btn-submit" onClick={handleSubmit}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Billet;
