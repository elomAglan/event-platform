import React, { useState, useReducer } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles avec styled-components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 80px;
  margin-left: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const ProgressBarContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 9999px;
`;

const Progress = styled.div`
  height: 8px;
  background-color: #6c5ce7;
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background-color: ${(props) => (props.primary ? "#6c5ce7" : "#00b894")};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background-color: ${(props) => (props.primary ? "#5a4dbf" : "#00997b")};
  }

  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

// Réducteur pour gérer les données du formulaire
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  title: "",
  description: "",
  category: "",
  tags: "",
  organizer: "",
  locationName: "",
  locationAddress: "",
  onlineLink: "",
  language: "",
  startDate: "",
  endDate: "",
  estimatedDuration: "",
  arrivalTime: "",
  ticketType: "",
  maxCapacity: "",
  registrationDeadline: "",
  promoCode: "",
  program: "",
  speakers: "",
  sponsors: "",
  partners: "",
  materials: "",
  prerequisites: "",
  accessibility: "",
  image: null,
};

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value: files ? files[0] : value });
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log("Événement créé :", formState);
      setShowConfirmation(true);
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formState.title && formState.description && formState.category && formState.organizer;
      case 2:
        return formState.locationName && formState.startDate && formState.endDate;
      case 3:
        return formState.ticketType && formState.maxCapacity && formState.registrationDeadline;
      default:
        return true;
    }
  };

  return (
    <div>
      <Container>
        <Title>Créer un nouvel événement</Title>

        <ProgressBarContainer>
          <ProgressBar>
            <Progress style={{ width: `${((step - 1) / 5) * 100}%` }} />
          </ProgressBar>
        </ProgressBarContainer>

        <form onSubmit={handleSubmit}>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderStep(step, formState, handleChange)}
          </motion.div>

          <ButtonContainer>
            {step > 1 && (
              <Button type="button" onClick={prevStep}>
                Précédent
              </Button>
            )}
            {step < 6 ? (
              <Button type="button" onClick={nextStep} primary disabled={!validateStep(step)}>
                Suivant
              </Button>
            ) : (
              <Button type="submit" disabled={!validateStep(step)}>
                Créer l'événement
              </Button>
            )}
          </ButtonContainer>
        </form>
      </Container>

      {showConfirmation && <ConfirmationModal onClose={() => setShowConfirmation(false)} />}
    </div>
  );
};

// Composant pour la modal de confirmation
const ConfirmationModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 120, damping: 14 }}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#6c5ce7",
      color: "white",
      padding: "2.5rem",
      borderRadius: "1rem",
      textAlign: "center",
      zIndex: 1001,
      boxShadow: "0 4px 20px rgba(108, 92, 231, 0.3)",
    }}
  >
    <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Événement créé avec succès ! 🎉</h2>
    <Button onClick={onClose} style={{ backgroundColor: "#ffffff", color: "#6c5ce7" }}>
      Fermer
    </Button>
  </motion.div>
);

// Fonction pour rendre les étapes du formulaire
const renderStep = (step, formState, handleChange) => {
  switch (step) {
    case 1:
      return (
        <div>
          <StepTitle>Étape 1 : Informations générales</StepTitle>
          <Input type="text" name="title" placeholder="Titre de l'événement" value={formState.title} onChange={handleChange} required />
          <Textarea name="description" placeholder="Description de l'événement" value={formState.description} onChange={handleChange} required />
          <Input type="text" name="category" placeholder="Catégorie" value={formState.category} onChange={handleChange} required />
          <Input type="text" name="organizer" placeholder="Organisateur" value={formState.organizer} onChange={handleChange} required />
        </div>
      );
    // Ajoutez les autres étapes ici...
    default:
      return null;
  }
};

export default CreateEvent;