import { useState } from "react";

const useValidateur = () => {
  const [errors, setErrors] = useState({});

  // Règles de validation
  const rules = {
    ticketCode: {
      required: "Le code du ticket est requis.",
      minLength: { value: 6, message: "Le code du ticket doit contenir au moins 6 caractères." },
      pattern: { value: /^[A-Z0-9]{6,}$/, message: "Le code du ticket est invalide." },
    },
    // Autres règles peuvent être ajoutées ici...
  };

  // Fonction de validation des champs
  const validate = (name, value) => {
    let errorMessage = "";

    if (rules[name]) {
      if (!value.trim()) {
        errorMessage = rules[name].required;
      } else {
        for (const rule in rules[name]) {
          if (rule !== "required") {
            const ruleObj = rules[name][rule];
            if (rule === "minLength" && value.length < ruleObj.value) {
              errorMessage = ruleObj.message;
              break;
            } else if (rule.startsWith("contains") && !ruleObj.value.test(value)) {
              errorMessage = ruleObj.message;
              break;
            } else if (rule === "pattern" && !ruleObj.value.test(value)) {
              errorMessage = ruleObj.message;
              break;
            }
          }
        }
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Vérifie si le formulaire est valide
  const isValid = () => Object.values(errors).every((error) => error === "");

  // Réinitialise les erreurs
  const resetErrors = () => setErrors({});

  return { errors, validate, isValid, resetErrors };
};

export default useValidateur;
