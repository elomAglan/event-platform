import { useState } from "react";

const useValidateur = () => {
  const [errors, setErrors] = useState({});

  // Fonction de validation des champs
  const validate = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "username":
        if (!value.trim()) {
          errorMessage = "Le nom d'utilisateur est requis.";
        } else if (value.length < 3) {
          errorMessage = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
        }
        break;

      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errorMessage = "L'email est requis.";
        } else if (!emailPattern.test(value)) {
          errorMessage = "L'email n'est pas valide.";
        }
        break;

      case "password":
        if (!value.trim()) {
          errorMessage = "Le mot de passe est requis.";
        } else if (value.length < 6) {
          errorMessage = "Le mot de passe doit contenir au moins 6 caractères.";
        } else if (!/[A-Z]/.test(value)) {
          errorMessage = "Le mot de passe doit contenir au moins une majuscule.";
        } else if (!/[0-9]/.test(value)) {
          errorMessage = "Le mot de passe doit contenir au moins un chiffre.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Fonction pour vérifier si le formulaire est valide
  const isValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return { errors, validate, isValid };
};

export default useValidateur;
