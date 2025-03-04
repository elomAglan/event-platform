import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    category: "",
    capacity: "",
    isFree: false,
    ticketPrice: "",
    organizerEmail: "",
    phoneNumber: "",
    paymentInfo: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, isFree: e.target.checked, ticketPrice: e.target.checked ? "" : formData.ticketPrice });
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.eventName) newErrors.eventName = "Le nom de l'événement est requis";
      if (!formData.eventDescription) newErrors.eventDescription = "La description est requise";
      if (!formData.eventDate) newErrors.eventDate = "La date est requise";
      if (!formData.eventTime) newErrors.eventTime = "L'heure est requise";
      if (!formData.eventLocation) newErrors.eventLocation = "Le lieu est requis";
      if (!formData.category) newErrors.category = "La catégorie est requise";
    } else if (currentStep === 2) {
      if (!formData.capacity) newErrors.capacity = "La capacité est requise";
      if (!formData.isFree && !formData.ticketPrice) newErrors.ticketPrice = "Le prix des billets est requis";
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
    <div className="create-event-container">
      <h2 className="form-title">Processus de création d'événement</h2> {/* Titre hors du conteneur */}
      <div className="event-form-container">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${(currentStep / 2) * 100}%` }}></div>
        </div>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="input-group">
              <div className="input-item">
                <input type="text" name="eventName" placeholder="Titre de l’événement" onChange={handleChange} required />
              </div>
              <div className="input-item full-width">
                <textarea name="eventDescription" placeholder="Description détaillée" rows="4" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <input type="date" name="eventDate" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <input type="time" name="eventTime" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <input type="text" name="eventLocation" placeholder="Lieu" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <select name="category" onChange={handleChange} required>
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="Musique">Musique</option>
                  <option value="Sport">Sport</option>
                  <option value="Conférence">Conférence</option>
                  <option value="Atelier">Atelier</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="input-group">
              <div className="input-item">
                <input type="number" name="capacity" placeholder="Places" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <label>
                  <input type="checkbox" checked={formData.isFree} onChange={handleCheckboxChange} />
                  Événement gratuit
                </label>
              </div>
              {!formData.isFree && (
                <div className="input-item">
                  <input type="text" name="ticketPrice" placeholder="Prix des billets" onChange={handleChange} required />
                </div>
              )}
              <div className="input-item">
                <input type="email" name="organizerEmail" placeholder="Email de l'organisateur" onChange={handleChange} required />
              </div>
              <div className="input-item">
                <input type="tel" name="phoneNumber" placeholder="Téléphone" onChange={handleChange} required />
              </div>
              <div className="input-item full-width">
                <input type="text" name="paymentInfo" placeholder="Infos de paiement" onChange={handleChange} required />
              </div>
            </div>
          )}
          <div className="button-group">
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
