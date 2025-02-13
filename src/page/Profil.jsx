import React, { useState, useEffect } from "react";
import "./Profil.css";

const Profil = () => {
  const [user, setUser] = useState({
    nom: "",
    email: "",
    role: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    // Simuler la récupération des données utilisateur (remplace avec une API réelle)
    const userData = {
      nom: "Jean Dupont",
      email: "jean.dupont@example.com",
      role: "Organisateur",
    };
    setUser(userData);
    setEditedUser(userData);
  }, []);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    alert("Profil mis à jour avec succès !");
  };

  return (
    <div className="profil-container">
      <h2 className="profil-title">Mon Profil</h2>
      <div className="profil-card">
        <div className="profil-field">
          <label>Nom :</label>
          {isEditing ? (
            <input
              type="text"
              name="nom"
              value={editedUser.nom}
              onChange={handleChange}
            />
          ) : (
            <span>{user.nom}</span>
          )}
        </div>

        <div className="profil-field">
          <label>Email :</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          ) : (
            <span>{user.email}</span>
          )}
        </div>

        <div className="profil-field">
          <label>Rôle :</label>
          <span>{user.role}</span>
        </div>

        {isEditing ? (
          <button className="profil-button save" onClick={handleSave}>
            Enregistrer
          </button>
        ) : (
          <button className="profil-button edit" onClick={() => setIsEditing(true)}>
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default Profil;
