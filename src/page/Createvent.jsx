import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  z-index: 1000;
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
  background-color: ${(props) => (props.primary ? "#007bff" : "#28a745")};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#218838")};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState({
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
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

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
    setShowConfirmation(true);
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
          <Progress style={{ width: `${(step - 1) * 20}%` }} />
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
                <StepTitle>Étape 1 : Informations générales</StepTitle>
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
                <Input
                  type="text"
                  name="category"
                  placeholder="Catégorie (ex. : conférence, atelier)"
                  value={eventData.category}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="tags"
                  placeholder="Tags (séparés par des virgules)"
                  value={eventData.tags}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="organizer"
                  placeholder="Organisateur"
                  value={eventData.organizer}
                  onChange={handleChange}
                  required
                />
                <ButtonContainer>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </ButtonContainer>
              </div>
            )}

            {step === 2 && (
              <div>
                <StepTitle>Étape 2 : Lieu et informations temporelles</StepTitle>
                <Input
                  type="text"
                  name="locationName"
                  placeholder="Nom du lieu"
                  value={eventData.locationName}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="locationAddress"
                  placeholder="Adresse"
                  value={eventData.locationAddress}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="url"
                  name="onlineLink"
                  placeholder="Lien pour événement en ligne"
                  value={eventData.onlineLink}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="language"
                  placeholder="Langue principale"
                  value={eventData.language}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="datetime-local"
                  name="startDate"
                  value={eventData.startDate}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="datetime-local"
                  name="endDate"
                  value={eventData.endDate}
                  onChange={handleChange}
                  required
                />
                <ButtonContainer>
                  <Button type="button" onClick={prevStep}>
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </ButtonContainer>
              </div>
            )}

            {step === 3 && (
              <div>
                <StepTitle>Étape 3 : Informations d'inscription</StepTitle>
                <Input
                  type="text"
                  name="ticketType"
                  placeholder="Type de billet (gratuit ou payant)"
                  value={eventData.ticketType}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="number"
                  name="maxCapacity"
                  placeholder="Capacité maximale"
                  value={eventData.maxCapacity}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="date"
                  name="registrationDeadline"
                  value={eventData.registrationDeadline}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="promoCode"
                  placeholder="Code promo (facultatif)"
                  value={eventData.promoCode}
                  onChange={handleChange}
                />
                <ButtonContainer>
                  <Button type="button" onClick={prevStep}>
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </ButtonContainer>
              </div>
            )}

            {step === 4 && (
              <div>
                <StepTitle>Étape 4 : Détails supplémentaires</StepTitle>
                <Textarea
                  name="program"
                  placeholder="Programme de l'événement"
                  value={eventData.program}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="speakers"
                  placeholder="Intervenants et leurs rôles"
                  value={eventData.speakers}
                  onChange={handleChange}
                />
                <Textarea
                  name="sponsors"
                  placeholder="Sponsors"
                  value={eventData.sponsors}
                  onChange={handleChange}
                />
                <Textarea
                  name="partners"
                  placeholder="Partenaires"
                  value={eventData.partners}
                  onChange={handleChange}
                />
                <ButtonContainer>
                  <Button type="button" onClick={prevStep}>
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </ButtonContainer>
              </div>
            )}

            {step === 5 && (
              <div>
                <StepTitle>Étape 5 : Matériel et accessibilité</StepTitle>
                <Textarea
                  name="materials"
                  placeholder="Matériel nécessaire pour les participants"
                  value={eventData.materials}
                  onChange={handleChange}
                />
                <Textarea
                  name="prerequisites"
                  placeholder="Pré-requis pour les participants"
                  value={eventData.prerequisites}
                  onChange={handleChange}
                />
                <Textarea
                  name="accessibility"
                  placeholder="Accessibilité du lieu"
                  value={eventData.accessibility}
                  onChange={handleChange}
                />
                <ButtonContainer>
                  <Button type="button" onClick={prevStep}>
                    Précédent
                  </Button>
                  <Button type="button" onClick={nextStep} primary>
                    Suivant
                  </Button>
                </ButtonContainer>
              </div>
            )}

            {step === 6 && (
              <div>
                <StepTitle>Étape 6 : Médias et promotion</StepTitle>
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
                <ButtonContainer>
                  <Button type="button" onClick={prevStep}>
                    Précédent
                  </Button>
                  <Button type="submit">Créer l'événement</Button>
                </ButtonContainer>
              </div>
            )}
          </motion.div>
        </form>

     {/* Confirmation après soumission */}
     {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#6c5ce7", // Couleur violette moderne
              color: "white",
              padding: "2.5rem",
              borderRadius: "1rem",
              textAlign: "center",
              zIndex: 1001,
              boxShadow: "0 4px 20px rgba(108, 92, 231, 0.3)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}
            >
              Événement créé avec succès ! 🎉
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                onClick={() => setShowConfirmation(false)}
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#ffffff",
                  color: "#6c5ce7",
                  fontWeight: "bold",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                Fermer
              </Button>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  );
};


export default CreateEvent;