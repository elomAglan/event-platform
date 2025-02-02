import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


// Barre de navigation stylisée avec Styled Components
const Navbar = styled.nav`
  background-color: #007bff;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; /* Assurez-vous qu'elle reste au-dessus du contenu */
`;

const NavbarTitle = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 80px; /* Ajoute de l'espace pour la navbar */
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
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
  background-color: #007bff;
  border-radius: 9999px;
  transition: width 0.3s ease-in-out;
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background-color: ${(props) => (props.primary ? "#007bff" : props.secondary ? "#6c757d" : "#28a745")};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : props.secondary ? "#5a6268" : "#218838")};
  }
`;

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    ticketPrice: "",
    phone: "",
    cardNumber: "",
    email: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setEventData({ ...eventData, [name]: files[0] });
    } else {
      setEventData({ ...eventData, [name]: value });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Événement créé :", eventData);
    alert("Événement créé avec succès !");
  };

  return (
    <div>
      {/* Barre de navigation */}
      <Navbar>
        <Link to="/">
              <h1 className="logo">Eventify</h1> {/* Remplacez par votre logo */}
                  </Link>
      </Navbar>

      {/* Contenu centré */}
      <Container>
        <Title>Créer un nouvel événement</Title>

        {/* Barre de progression animée */}
        <ProgressBarContainer>
          <ProgressBar>
            <Progress style={{ width: `${(step - 1) * 50}%` }} />
          </ProgressBar>
        </ProgressBarContainer>

        <form onSubmit={handleSubmit}>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {step === 1 && (
              <div>
                <StepTitle>Étape 1 : Informations de base</StepTitle>
                <Input
                  type="text"
                  name="title"
                  placeholder="Titre de l'événement"
                  value={eventData.title}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="description"
                  placeholder="Description de l'événement"
                  value={eventData.description}
                  onChange={handleChange}
                  required
                />
                <Button type="button" onClick={nextStep} primary>
                  Suivant
                </Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <StepTitle>Étape 2 : Détails supplémentaires</StepTitle>
                <Input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="location"
                  placeholder="Lieu de l'événement"
                  value={eventData.location}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  value={eventData.phone}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={eventData.email}
                  onChange={handleChange}
                  required
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                  <Button type="button" onClick={prevStep} secondary>
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <StepTitle>Étape 3 : Paiement et image</StepTitle>
                <Input
                  type="number"
                  name="ticketPrice"
                  placeholder="Prix du billet (FCFA)"
                  value={eventData.ticketPrice}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="Numéro de carte bancaire"
                  value={eventData.cardNumber}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                  <Button type="button" onClick={prevStep} secondary>
                    Précédent
                  </Button>
                  <Button type="submit">Créer l'événement</Button>
                </div>
              </div>
            )}
          </motion.div>
        </form>
      </Container>
    </div>
  );
};

export default CreateEvent;
