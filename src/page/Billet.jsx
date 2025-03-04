import React, { useState, useCallback } from "react";
import { FaTicketAlt, FaTrash, FaEdit, FaPlus, FaArrowLeft } from "react-icons/fa";
import Modal from "../page/Modal.jsx";
import "./Billet.css";

const Billet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Concert de Rock",
      tickets: [
        { id: 1, name: "Ticket Standard", price: "10", quantity: "100" },
        { id: 2, name: "Ticket VIP", price: "50", quantity: "30" },
      ],
    },
    {
      id: 2,
      name: "Conférence Technologie",
      tickets: [
        { id: 3, name: "Ticket Standard", price: "20", quantity: "200" },
        { id: 4, name: "Ticket Premium", price: "100", quantity: "50" },
      ],
    },
  ]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [billetDetails, setBilletDetails] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});

  const toggleModal = useCallback((event = null, ticket = null) => {
    setModalOpen((prev) => !prev);
    if (event) {
      setCurrentEvent(event);
      if (ticket) {
        setBilletDetails(ticket);
      } else {
        setBilletDetails({ name: "", price: "", quantity: "" });
      }
    } else {
      setCurrentEvent(null);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBilletDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

    const updatedEvent = { ...currentEvent };
    const updatedTicket = { ...billetDetails, id: billetDetails.id || Date.now() };

    if (billetDetails.id) {
      updatedEvent.tickets = updatedEvent.tickets.map((ticket) =>
        ticket.id === billetDetails.id ? updatedTicket : ticket
      );
    } else {
      updatedEvent.tickets = [...updatedEvent.tickets, updatedTicket];
    }

    setEvents((prev) =>
      prev.map((event) => (event.id === currentEvent.id ? updatedEvent : event))
    );
    toggleModal();
  };

  const handleDelete = useCallback((eventId, ticketId) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? { ...event, tickets: event.tickets.filter((ticket) => ticket.id !== ticketId) }
          : event
      )
    );
  }, []);

  return (
    <div className="billet-container">
      <h1>Gestion des Billets</h1>

      {/* Affichage de la liste des événements */}
      {!currentEvent && (
        <div className="event-section-container">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="event-section" onClick={() => setCurrentEvent(event)}>
                <h2>{event.name}</h2>
              </div>
            ))
          ) : (
            <p>Aucun événement disponible.</p>
          )}
        </div>
      )}

      {/* Affichage des billets pour l'événement sélectionné */}
      {currentEvent && (
        <div className="ticket-section">
          <button className="btn-back" onClick={() => setCurrentEvent(null)}>
            <FaArrowLeft className="mr-2" />
          </button>
          <h2>Billets pour l'événement : {currentEvent.name}</h2>
          <button className="btn-open-modal" onClick={() => toggleModal(currentEvent)}>
            <FaPlus className="mr-2" /> 
          </button>

          {currentEvent.tickets.length > 0 ? (
            <table className="billet-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEvent.tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.name}</td>
                    <td>{ticket.price}€</td>
                    <td>{ticket.quantity}</td>
                    <td>
                      <button className="btn-edit" onClick={() => toggleModal(currentEvent, ticket)}>
                        <FaEdit />
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(currentEvent.id, ticket.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun billet disponible pour cet événement.</p>
          )}
        </div>
      )}

      {/* Modal pour ajouter ou modifier un billet */}
      {modalOpen && (
        <Modal title={billetDetails.id ? "Modifier le Billet" : "Ajouter un Billet"} onClose={toggleModal}>
          <div className="modal-body">
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
              <button className="btn-cancel" onClick={toggleModal}>
                Annuler
              </button>
              <button className="btn-submit" onClick={handleSubmit}>
                Enregistrer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Billet;
