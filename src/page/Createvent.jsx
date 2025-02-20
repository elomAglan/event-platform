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
  max-width: 500px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
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
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.6);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    phoneNumber: "",
    paymentInfo: "",
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
      setProgress(((step + 1) / 6) * 100);
    } else {
      alert("Veuillez remplir ce champ avant de continuer.");
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setProgress(((step - 1) / 6) * 100);
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
      <h2>Créer un Événement Sécurisé</h2>
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
        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Numéro de téléphone</label>
            <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </motion.div>
        )}
        {step === 6 && (
          <motion.div key="step6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <label>Informations de paiement</label>
            <Input type="text" name="paymentInfo" value={formData.paymentInfo} onChange={handleChange} required />
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        {step > 1 && <Button onClick={prevStep}>Retour</Button>}
        {step < 6 ? (
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
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
      alignItems: "center", justifyContent: "center", zIndex: 1000,
    }}>
    <motion.div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "1rem", textAlign: "center" }}>
      <h2>✅ Événement sécurisé créé avec succès !</h2>
      <Button primary onClick={onClose}>OK</Button>
    </motion.div>
  </motion.div>
);

export default CreateEvent;
