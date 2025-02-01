import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"; // Navbar globale
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import Login from "./Authentification/Login";
import Register from "./Authentification/Register"; // Import de la page Register
import Createvent from "./page/Createvent"; // Import du composant Createvent

function App() {
  const location = useLocation(); // Récupère la route courante
  const navigate = useNavigate(); // Hook pour la navigation

  const handleJoinEvent = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fonction pour rediriger vers la page de création d'événement
  const handleCreateEvent = () => {
    navigate("/createvent");
  };

  // Vérifie si la route courante est "login", "register" ou "createvent"
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/createvent";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Masque la Navbar sur les pages Login, Register et Createvent */}
      {!isAuthPage && <Navbar />}

      {/* Routes de l'application */}
      <main className="flex-grow">
        <Routes>
          {/* Route principale (accueil) */}
          <Route 
            path="/" 
            element={
              <>
                {/* Hero Section */}
                <header className="hero relative">
                  <div className="hero-overlay">
                    <h1 className="hero-title animate-typing">
                      Bienvenue sur <span className="highlight">Eventify</span>
                    </h1>
                    <p className="hero-subtitle">
                      Organisez vos événements ou participez à des expériences mémorables.
                    </p>
                  </div>

                  {/* Call to Action Section */}
                  <div className="cta-section">
                    <button
                      className="cta-button create"
                      aria-label="Créer un événement"
                      onClick={handleCreateEvent} // Lien vers la page Createvent
                    >
                      Créer un événement
                    </button>
                    <button
                      className="cta-button join"
                      onClick={handleJoinEvent}
                      aria-label="Participer à un événement"
                    >
                      Participer à un événement
                    </button>
                  </div>
                </header>

                {/* Contenu principal */}
                <section className="mt-20 md:mt-40 py-16">
                  <Page1 />
                </section>
              </>
            }
          />

          {/* Route pour la page de connexion */}
          <Route path="/login" element={<Login />} />

          {/* Route pour la page d'inscription */}
          <Route path="/register" element={<Register />} />

          {/* Route pour la page de création d'événement */}
          <Route path="/createvent" element={<Createvent />} />
        </Routes>
      </main>

      {/* Masque le Footer sur les pages Login, Register et Createvent */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;