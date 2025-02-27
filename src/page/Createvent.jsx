import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  margin-right: 50px; // Ajustez cet espace selon vos besoins
`;


const FormContainer = styled.div`
  max-width: 900px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  margin-left: 50px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #6c5ce7;
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

const Button = styled.button`
  width: 100%;
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 12px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: #4834d4;
  }
`;

const ProgressBar = styled.div`
  height: 5px;
  background-color: #ccc;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #6c5ce7;
  border-radius: 5px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

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

  const progress = (currentStep / 2) * 100;

  return (
    <PageContainer>
      <FormContainer>
        <Title>Processus de création d'événement</Title>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <FormRow>
                <Input
                  type="text"
                  name="eventName"
                  placeholder="Titre de l’événement"
                  onChange={handleChange}
                  required
                />
                <TextArea
                  name="eventDescription"
                  placeholder="Description détaillée"
                  rows="4"
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <FormRow>
                <Input
                  type="date"
                  name="eventDate"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="time"
                  name="eventTime"
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <FormRow>
                <Input
                  type="text"
                  name="eventLocation"
                  placeholder="Lieu (Adresse ou lien en ligne)"
                  onChange={handleChange}
                  required
                />
              </FormRow>
            </>
          )}
          {currentStep === 2 && (
            <>
              <FormRow>
                <Input
                  type="number"
                  name="capacity"
                  placeholder="Capacité maximale"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="ticketPrice"
                  placeholder="Prix des billets (gratuit ou payant)"
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <FormRow>
                <Input
                  type="text"
                  name="coverImage"
                  placeholder="Lien de l'image de couverture"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="category"
                  placeholder="Catégorie de l’événement"
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <FormRow>
                <Input
                  type="email"
                  name="organizerEmail"
                  placeholder="Email de l'organisateur"
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Numéro de téléphone"
                  onChange={handleChange}
                  required
                />
              </FormRow>
              <FormRow>
                <Input
                  type="text"
                  name="paymentInfo"
                  placeholder="Informations de paiement"
                  onChange={handleChange}
                  required
                />
              </FormRow>
            </>
          )}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {currentStep > 1 && <Button type="button" onClick={handlePrev}>Précédent</Button>}
            {currentStep < 2 ? (
              <Button type="button" onClick={handleNext}>Suivant</Button>
            ) : (
              <Button type="submit">Créer l'événement</Button>
            )}
          </div>
          {Object.values(errors).length > 0 && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {Object.values(errors).map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default CreateEvent;
