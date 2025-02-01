import React, { useState } from "react";
import "./Createvent.css"; // Importation du fichier CSS

const CreateEvent = () => {
  const [step, setStep] = useState(1); // Étape actuelle du formulaire
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    ticketPrice: "",
    image: null,
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setEventData({ ...eventData, [name]: files[0] });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  // Passage à l'étape suivante
  const nextStep = () => {
    setStep(step + 1);
  };

  // Retour à l'étape précédente
  const prevStep = () => {
    setStep(step - 1);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Événement créé :", eventData);
    // Ici, vous pouvez envoyer les données à votre backend ou API
    alert("Événement créé avec succès !");
  };

  // Affichage du formulaire en fonction de l'étape
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>Étape 1 : Informations de base</h2>
            <input
              type="text"
              name="title"
              placeholder="Titre de l'événement"
              value={eventData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description de l'événement"
              value={eventData.description}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={nextStep}>
              Suivant
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Étape 2 : Date et lieu</h2>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Lieu de l'événement"
              value={eventData.location}
              onChange={handleChange}
              required
            />
            <div className="form-navigation">
              <button type="button" onClick={prevStep}>
                Précédent
              </button>
              <button type="button" onClick={nextStep}>
                Suivant
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>Étape 3 : Billets et image</h2>
            <input
              type="number"
              name="ticketPrice"
              placeholder="Prix du billet (en FCFA)"
              value={eventData.ticketPrice}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
            <div className="form-navigation">
              <button type="button" onClick={prevStep}>
                Précédent
              </button>
              <button type="submit">Créer l'événement</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="create-event-container">
      <h1>Créer un nouvel événement</h1>
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default CreateEvent;