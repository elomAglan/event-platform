import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importer l'icône de retour
import "./Register.css"; // Assurez-vous d'avoir un fichier CSS pour le style

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation simple
    if (!username || !email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    try {
      // Simuler une requête API (remplacez par votre logique réelle)
      const response = await fakeRegisterApi(username, email, password);
      console.log("Inscription réussie :", response);
      navigate("/login"); // Rediriger vers la page de connexion après l'inscription
    } catch (err) {
      setError("Une erreur s'est produite lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction simulée pour l'API d'inscription
  const fakeRegisterApi = (username, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && email && password) {
          resolve({ user: username, email });
        } else {
          reject(new Error("Erreur lors de l'inscription."));
        }
      }, 1000); // Simuler un délai de réseau
    });
  };

  return (
    <div className="register-page">
      {/* Header */}
      <header className="register-header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" /> {/* Remplacez par votre logo */}
          </Link>
        </div>
      </header>

      {/* Formulaire d'inscription */}
      <div className="register-container">
        <div className="register-form">
          {/* Icône de retour */}
          <button
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Retour"
          >
            <FaArrowLeft />
          </button>

          <h2 className="register-title">Créer un compte</h2>

          {/* Affichage des erreurs */}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username" className="input-label">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                id="username"
                className="input-field"
                placeholder="Entrez votre nom"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-required="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Créez un mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
              aria-label={isLoading ? "Inscription en cours..." : "S'inscrire"}
            >
              {isLoading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </form>

          {/* Lien vers la page de connexion */}
          <p className="login-link">
            Déjà un compte ?{" "}
            <Link to="/login" className="login-link-text">
              Se connecter
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="register-footer">
        <p>
          En vous inscrivant, vous acceptez nos{" "}
          <Link to="/terms" className="footer-link">
            Conditions d'utilisation
          </Link>{" "}
          et notre{" "}
          <Link to="/privacy" className="footer-link">
            Politique de confidentialité
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}

export default Register;