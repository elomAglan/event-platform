import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barre de navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        {/* Texte d'accueil */}
        <div className="hero-overlay">
          <h1 className="hero-title">
            Bienvenue sur <span className="highlight">Eventify</span>
          </h1>
          <p className="hero-subtitle">
            Organisez vos événements ou participez à des expériences mémorables.
          </p>
        </div>
      </header>

      {/* Call to Action Section (en bas à gauche) */}
      <section className="cta-section">
        <button className="cta-button create">Créer un événement</button>
        <button className="cta-button join">Participer à un événement</button>
      </section>
    </div>
  );
}

export default App;
