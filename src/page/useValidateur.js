import { useState } from "react";

const useValidateur = () => {
  const [errors, setErrors] = useState({});

  // Règles de validation dynamiques
  const rules = {
    ticketCode: {
      required: "Le code du ticket est requis.",
      minLength: { value: 6, message: "Le code du ticket doit contenir au moins 6 caractères." },
      pattern: { value: /^[A-Z0-9]{6,}$/, message: "Le code du ticket est invalide (lettres majuscules et chiffres uniquement)." },
    },
  };

  // Fonction de validation d'un champ spécifique
  const validate = (name, value) => {
    if (!rules[name]) return;

    let errorMessage = "";

    if (!value.trim()) {
      errorMessage = rules[name].required;
    } else {
      for (const rule in rules[name]) {
        if (rule === "minLength" && value.length < rules[name][rule].value) {
          errorMessage = rules[name][rule].message;
          break;
        } else if (rule === "pattern" && !rules[name][rule].value.test(value)) {
          errorMessage = rules[name][rule].message;
          break;
        }
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Vérifie si le formulaire est valide (pas d'erreurs et au moins un champ rempli)
  const isValid = () => {
    return Object.values(errors).every((error) => error === "") &&
           Object.keys(errors).length > 0;
  };

  // Réinitialise toutes les erreurs
  const resetErrors = () => setErrors({});

  // Supprime une erreur spécifique (ex: au focus du champ)
  const clearError = (name) => {
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return { errors, validate, isValid, resetErrors, clearError };
};

export default useValidateur;
