import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.css"; // Réutilisation du CSS de connexion

// Simulation d'une API d'inscription (à remplacer par une vraie API)
const fakeRegisterApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 6) {
        resolve({ user: "New User" });
      } else {
        reject(new Error("L'inscription a échoué. Vérifiez vos informations."));
      }
    }, 1000);
  });
};

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fakeRegisterApi(email, password);
      console.log("Inscription réussie :", response);
      navigate("/login"); // Redirige vers la connexion après inscription
    } catch (err) {
      setError(err.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Formulaire d'inscription */}
      <div className="login-form">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Retour"
        >
          <FaArrowLeft />
        </button>

        <h2 className="login-title">S'inscrire</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading}
            aria-label={isLoading ? "Inscription en cours" : "S'inscrire"}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>

        <div className="login-options">
          <p>
            Déjà un compte ? {" "}
            <Link to="/login" className="signup-link">
              Se connecter
            </Link>
          </p>
        </div>
      </div>

      {/* Image à droite */}
      <div className="login-image">
        <img src={"/image3.jpg"} alt="Inscription" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Register;
