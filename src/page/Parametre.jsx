import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useValidateur from "../page/Validateur"; // Importation du validateur
import "./Parametre.css";

const Parametre = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { errors, validate, isValid } = useValidateur();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Valider en temps réel
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      alert("Formulaire valide ! Données envoyées.");
      // Envoyer les données au backend
    } else {
      alert("Veuillez corriger les erreurs.");
    }
  };

  return (
    <div className="parametre-container">
      <Sidebar />
      <div className="parametre-mainContent">
        <div className="parametre-header">Paramètres</div>
        <form className="parametre-form" onSubmit={handleSubmit}>
          <div className="parametre-inputGroup">
            <label htmlFor="username" className="parametre-label">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              className="parametre-input"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error-text">{errors.username}</p>}
          </div>

          <div className="parametre-inputGroup">
            <label htmlFor="email" className="parametre-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="parametre-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="parametre-inputGroup">
            <label htmlFor="password" className="parametre-label">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              className="parametre-input"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit" className="parametre-submitButton">Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};

export default Parametre;
