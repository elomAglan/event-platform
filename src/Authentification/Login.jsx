import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Importer l'icône de retour
import "./Login.css"; // Fichier CSS pour le style

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation simple
    if (!email || !password) {
      setError("Veuillez entrer votre email et mot de passe.");
      return;
    }

    setIsLoading(true);

    try {
      // Simuler une requête API (remplacez par votre logique réelle)
      const response = await fakeLoginApi(email, password);
      console.log("Connexion réussie :", response);
      navigate("/"); // Rediriger vers la page d'accueil après la connexion
    } catch (err) {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction simulée pour l'API de connexion
  const fakeLoginApi = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password123") {
          resolve({ user: "Test User" });
        } else {
          reject(new Error("Email ou mot de passe incorrect."));
        }
      }, 1000); // Simuler un délai de réseau
    });
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" /> {/* Remplacez par votre logo */}
          </Link>
        </div>
      </header>

      {/* Formulaire de connexion */}
      <div className="login-container">
        <div className="login-form">
          {/* Bouton de retour */}
          <button
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Retour"
          >
            <FaArrowLeft />
          </button>

          <h2 className="login-title">Se connecter</h2>

          {/* Affichage des erreurs */}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
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
                placeholder="Entrez votre mot de passe"
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
              aria-label={isLoading ? "Connexion en cours..." : "Se connecter"}
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          {/* Options supplémentaires */}
          <div className="login-options">
            <Link to="/forgot-password" className="forgot-password-link">
              Mot de passe oublié ?
            </Link>
            <p className="signup-link">
              Pas encore de compte ?{" "}
              <Link to="/register" className="signup-link-text">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="login-footer">
        <p>
          En vous connectant, vous acceptez nos{" "}
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

export default Login;