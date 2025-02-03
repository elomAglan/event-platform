import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.css"; // Ensure the CSS file is imported


// Fake login API simulation (can be moved to a separate utility file)
const fakeLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        resolve({ user: "Test User" });
      } else {
        reject(new Error("Email ou mot de passe incorrect."));
      }
    }, 1000);
  });
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!email || !password) {
      setError("Veuillez entrer votre email et mot de passe.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fakeLoginApi(email, password);
      console.log("Connexion réussie :", response);
      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      setError(err.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side: Login Form */}
      <div className="login-form">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Retour"
        >
          <FaArrowLeft />
        </button>

        <h2 className="login-title">Se connecter</h2>
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
              aria-required="true"
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
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading}
            aria-label={isLoading ? "Connexion en cours" : "Se connecter"}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              "Se connecter"
            )}
          </button>
        </form>

        <div className="login-options">
          <Link to="/forgot-password" className="forgot-password-link">
            Mot de passe oublié ?
          </Link>
          <p>
            Pas encore de compte ?{" "}
            <Link to="/register" className="signup-link">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="login-image">
        <img
          src={"/image3.jpg"}
          alt="Connexion"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Login;