import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Page1 from "./components/Page1";
import Login from "./Authentification/Login";
import Register from "./Authentification/Register";
import Createvent from "./page/Createvent";
import Payeticket from "./page/Payeticket";
import Gestionevent from "./page/Gestionevent";
import Dashboard from "./page/Dashboard";
import Billet from "./page/Billet";
import Parametre from "./page/Parametre";
import Profil from "./page/Profil";
import Validateur from "./page/Validateur";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pages nécessitant la Sidebar
  const isAppPage = [
    "/createvent",
    "/gestionevent",
    "/billet",
    "/parametre",
    "/dashboard",
    "/profil",
    "/validateur"
  ].includes(location.pathname);

  // Pages sans Navbar ni Footer
  const isHiddenPage = ["/login", "/register", "/payeticket"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Affichage conditionnel de la Navbar */}
      {!isAppPage && !isHiddenPage && <Navbar />}

      <main className="flex-grow flex">
        {/* Affichage de la Sidebar uniquement sur certaines pages */}
        {isAppPage && <Sidebar />}

        <div className="flex-1">
          <Routes>
            <Route path="/" element={
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
                    <button className="cta-button create" onClick={() => navigate("/createvent")}>
                      Créer un événement
                    </button>
                    <button className="cta-button join" onClick={() => document.getElementById("events-section")?.scrollIntoView({ behavior: "smooth" })}>
                      Participer à un événement
                    </button>
                  </div>
                </header>
                <section className="mt-20 md:mt-40 py-16">
                  <Page1 />
                </section>
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payeticket" element={<Payeticket />} />
            <Route path="/createvent" element={<Createvent />} />
            <Route path="/gestionevent" element={<Gestionevent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billet" element={<Billet />} />
            <Route path="/parametre" element={<Parametre />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/validateur" element={<Validateur />} />
          </Routes>
        </div>
      </main>

      {/* Affichage conditionnel du Footer */}
      {!isAppPage && !isHiddenPage && <Footer />}
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
