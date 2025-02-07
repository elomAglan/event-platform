import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import Login from "./Authentification/Login";
import Register from "./Authentification/Register";
import Createvent from "./page/Createvent";
import Payeticket from "./page/Payeticket";
import Gestionevent from "./page/Gestionevent";

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

  const handleManageEvent = () => {
    navigate("/gestionevent");
  };

  const isAuthPage = ["/login", "/register", "/createvent", "/payeticket", "/gestionevent"].includes(location.pathname);

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
                    <button className="cta-button create" onClick={handleCreateEvent}>Créer un événement</button>
                    <button className="cta-button join" onClick={handleJoinEvent}>Participer à un événement</button>
                    <button className="cta-button manage" onClick={handleManageEvent}>Gérer les ventes</button>
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
          <Route path="/payeticket" element={<Payeticket />} />
          <Route path="/gestionevent" element={<Gestionevent />} /> {/* Nouvelle route pour la gestion */}
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
