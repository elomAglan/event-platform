import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./GestionRoles.css"; // Assure-toi que ce fichier CSS existe

const GestionRoles = () => {
  // Liste des rôles disponibles
  const [roles] = useState([
    { id: 1, name: "Admin", description: "Accès complet à toutes les fonctionnalités" },
    { id: 2, name: "Utilisateur", description: "Accès aux fonctionnalités de base" },
    { id: 3, name: "Modérateur", description: "Peut gérer les événements et utilisateurs" },
  ]);

  // Liste des utilisateurs avec leurs rôles
  const [users, setUsers] = useState([]);

  // États pour gérer l'ajout d'un rôle
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Fonction pour attribuer un rôle
  const handleAssignRole = () => {
    if (username && selectedRole) {
      setUsers([...users, { id: users.length + 1, name: username, role: selectedRole }]);
      setUsername(""); // Réinitialiser le champ
      setSelectedRole(""); // Réinitialiser le rôle
    }
  };

  return (
    <div className="gestion-roles-container">
      <Sidebar />
      <div className="gestion-roles-content">
        <h1>Gestion des Rôles</h1>

        {/* Attribution de rôles */}
        <div className="role-assignment">
          <input
            type="text"
            placeholder="Nom de l'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="">Sélectionner un rôle</option>
            {roles.map((role) => (
              <option key={role.id} value={role.name}>{role.name}</option>
            ))}
          </select>
          <button onClick={handleAssignRole}>Attribuer</button>
        </div>

        {/* Liste des rôles */}
        <h2>Liste des Rôles</h2>
        <table className="roles-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du Rôle</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td>{role.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Liste des utilisateurs avec leurs rôles */}
        <h2>Utilisateurs et Rôles</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionRoles;
