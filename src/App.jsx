import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import Login from "./Authentification/Login";
import Register from "./Authentification/Register";
import Createvent from "./page/Createvent";
import Payeticket from "./page/Payeticket"; // Import de la page Payeticket

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleJoinEvent = () => {
    const eventsSection = document.getElementById("events-section");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCreateEvent = () => {
    navigate("/createvent");
  };

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/createvent";

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <header className="hero relative">
                  <div className="hero-overlay">
                    <h1 className="hero-title animate-typing">
                      Bienvenue sur <span className="highlight">Eventify</span>
                    </h1>
                    <p className="hero-subtitle">
                      Organisez vos événements ou participez à des expériences mémorables.
                    </p>
                  </div>
                  <div className="cta-section">
                    <button
                      className="cta-button create"
                      aria-label="Créer un événement"
                      onClick={handleCreateEvent}
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
                <section className="mt-20 md:mt-40 py-16">
                  <Page1 />
                </section>
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createvent" element={<Createvent />} />

          {/* Nouvelle route pour la page de paiement */}
          <Route path="/payeticket" element={<Payeticket />} />
        </Routes>
      </main>

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
