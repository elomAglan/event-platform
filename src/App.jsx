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
import Dashboard from "./page/Dashboard"; // Assure-toi que le chemin est correct
import Sidebar from "./components/Sidebar";

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
  const isCreateEventPage = location.pathname === "/createvent";
  const isDashboardPage = location.pathname === "/dashboard"; // Vérifie si on est sur la page Dashboard

  // Exclure la Navbar et le Footer sur la page Dashboard et Createvent
  const shouldDisplayNavbarAndFooter = !isCreateEventPage && !isDashboardPage;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Affichage de la Navbar seulement si ce n'est pas la page Dashboard ou Createvent */}
      {shouldDisplayNavbarAndFooter && <Navbar />}
      
      <main className="flex-grow flex">
        {/* Affichage de la Sidebar sur Dashboard et Createvent */}
        {(isCreateEventPage || isDashboardPage) && <Sidebar />}
        
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
            <Route path="/dashboard" element={<Dashboard />} /> {/* Route pour Dashboard */}
          </Routes>
        </div>
      </main>

      {/* Affichage du Footer seulement si ce n'est pas la page Dashboard ou Createvent */}
      {shouldDisplayNavbarAndFooter && <Footer />}
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
