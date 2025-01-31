import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"; // Navbar globale
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import Login from "./Authentification/Login";
import Register from "./Authentification/Register"; // Import de la page Register

function App() {
  const location = useLocation(); // Récupère la route courante

  const handleJoinEvent = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Vérifie si la route courante est "login" ou "register"
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Masque la Navbar sur les pages Login et Register */}
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
                    <button className="cta-button create" aria-label="Créer un événement">
                      Créer un événement
                    </button>
                    <button className="cta-button join" onClick={handleJoinEvent} aria-label="Participer à un événement">
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
        </Routes>
      </main>

      {/* Masque le Footer sur les pages Login et Register */}
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