import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #6c5ce7 0%, #a29bfe 100%);
  transition: width 0.4s ease-in-out;
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#6c5ce7" : "#ddd")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: none;
  padding: 12px 20px;
  margin: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#4834d4" : "#bbb")};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    return Object.values(formData)[step - 1].trim() !== "";
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
      setProgress(((step + 1) / 4) * 100);
    } else {
      alert("Veuillez remplir ce champ avant de continuer.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setProgress(((step - 1) / 4) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setProgress(100);
      setTimeout(() => setShowModal(true), 500);
    }
  };

  return (
    <FormContainer>
      <h2>Créer un Événement</h2>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Nom de l'événement</label>
            <Input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Date de l'événement</label>
            <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Lieu de l'événement</label>
            <Input type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} required />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Description</label>
            <TextArea name="eventDescription" value={formData.eventDescription} onChange={handleChange} required />
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        {step > 1 && <Button onClick={prevStep}>Retour</Button>}
        {step < 4 ? (
          <Button primary onClick={nextStep}>Suivant</Button>
        ) : (
          <Button primary onClick={handleSubmit}>Créer</Button>
        )}
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </FormContainer>
  );
};

const Modal = ({ onClose }) => (
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
      backgroundColor: "#ffffff",
      padding: "2rem",
      borderRadius: "1rem",
      textAlign: "center",
      zIndex: 1002,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    }}
  >
    <h2>✅ Événement créé avec succès !</h2>
    <p>Votre événement est prêt. Vous pouvez maintenant le gérer depuis votre tableau de bord.</p>
    <Button primary onClick={onClose}>OK</Button>
  </motion.div>
);

export default CreateEvent;
