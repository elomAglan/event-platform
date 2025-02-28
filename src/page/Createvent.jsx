import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    capacity: "",
    ticketPrice: "",
    coverImage: "",
    category: "",
    organizerEmail: "",
    phoneNumber: "",
    paymentInfo: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.eventName) newErrors.eventName = "Le nom de l'événement est requis";
      if (!formData.eventDescription) newErrors.eventDescription = "La description est requise";
      if (!formData.eventDate) newErrors.eventDate = "La date est requise";
      if (!formData.eventTime) newErrors.eventTime = "L'heure est requise";
      if (!formData.eventLocation) newErrors.eventLocation = "Le lieu est requis";
    } else if (currentStep === 2) {
      if (!formData.capacity) newErrors.capacity = "La capacité est requise";
      if (!formData.ticketPrice) newErrors.ticketPrice = "Le prix des billets est requis";
      if (!formData.coverImage) newErrors.coverImage = "L'image de couverture est requise";
      if (!formData.category) newErrors.category = "La catégorie est requise";
      if (!formData.organizerEmail) newErrors.organizerEmail = "L'email de l'organisateur est requis";
      if (!formData.phoneNumber) newErrors.phoneNumber = "Le numéro de téléphone est requis";
      if (!formData.paymentInfo) newErrors.paymentInfo = "Les informations de paiement sont requises";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Événement créé avec succès", formData);
    alert("Événement créé avec succès !");
  };

  return (
    <div className="page-container">
    <div className="form-container">
      <h2 className="title">Processus de création d'événement</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(currentStep / 2) * 100}%` }}></div>
      </div>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="form-row">
            <div className="input-item">
              <input
                type="text"
                name="eventName"
                placeholder="Titre de l’événement"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <textarea
                name="eventDescription"
                placeholder="Description détaillée"
                rows="4"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input type="date" name="eventDate" onChange={handleChange} required />
            </div>
            <div className="input-item">
              <input type="time" name="eventTime" onChange={handleChange} required />
            </div>
            <div className="input-item">
              <input
                type="text"
                name="eventLocation"
                placeholder="Lieu"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-row">
            <div className="input-item">
              <input
                type="number"
                name="capacity"
                placeholder="Capacité"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="text"
                name="ticketPrice"
                placeholder="Prix des billets"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="text"
                name="coverImage"
                placeholder="Lien de l'image"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="text"
                name="category"
                placeholder="Catégorie"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="email"
                name="organizerEmail"
                placeholder="Email de l'organisateur"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Téléphone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-item">
              <input
                type="text"
                name="paymentInfo"
                placeholder="Infos de paiement"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}
        <div className="button-container">
          {currentStep > 1 && <button type="button" onClick={handlePrev}>Précédent</button>}
          {currentStep < 2 ? (
            <button type="button" onClick={handleNext}>Suivant</button>
          ) : (
            <button type="submit">Créer l'événement</button>
          )}
        </div>
        {Object.values(errors).length > 0 && (
          <div className="error-messages">
            {Object.values(errors).map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </form>
    </div>
  </div>
  
  );
};

export default CreateEvent;
