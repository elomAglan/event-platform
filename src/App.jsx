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
import Dashboard from "./page/Dashboard";
import Sidebar from "./components/Sidebar";
import Billet from "./page/Billet";
import Parametre from "./page/Parametre";
import Profil from "./page/Profil"; // Import du composant Profil
import Validateur from "./page/Validateur"; // Import du composant Validateur

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

  // Pages nécessitant la Sidebar
  const isAppPage = [
    "/createvent",
    "/payeticket",
    "/gestionevent",
    "/billet",
    "/parametre",
    "/dashboard",
    "/profil",
    "/validateur"
  ].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAppPage && <Navbar />}

      <main className="flex-grow flex">
        {isAppPage && <Sidebar />} {/* Affichage de la Sidebar pour certaines pages */}
        
        <div className="flex-1">
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
            <Route path="/gestionevent" element={<Gestionevent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billet" element={<Billet />} />
            <Route path="/parametre" element={<Parametre />} />
            <Route path="/profil" element={<Profil />} /> {/* Route pour Profil */}
            <Route path="/validateur" element={<Validateur />} /> {/* Route pour Validateur */}
          </Routes>
        </div>
      </main>

      {!isAppPage && <Footer />}
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
