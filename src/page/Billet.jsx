import React, { useState } from "react";
import { FaTicketAlt, FaTrash } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Modal from "../page/Modal.jsx";

import "./Billet.css";

const Billet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [billets, setBillets] = useState([]);
  const [billetDetails, setBilletDetails] = useState({ name: "", price: "", quantity: "" });
  const [errors, setErrors] = useState({});

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleInputChange = (e) => {
    setBilletDetails({ ...billetDetails, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validateFields = () => {
    let errors = {};
    if (!billetDetails.name) errors.name = "Nom requis";
    if (!billetDetails.price || billetDetails.price <= 0) errors.price = "Prix invalide";
    if (!billetDetails.quantity || billetDetails.quantity <= 0) errors.quantity = "Quantité invalide";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setBillets([...billets, { ...billetDetails, id: Date.now() }]);
    toggleModal();
    setBilletDetails({ name: "", price: "", quantity: "" });
  };

  const handleDelete = (id) => {
    setBillets(billets.filter((billet) => billet.id !== id));
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <h1>Gestion des Billets</h1>
        <button className="btn-open-modal" onClick={toggleModal}>
          Ajouter un billet <FaTicketAlt className="ml-2" />
        </button>

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
    </div>
  );
};

export default Billet;
