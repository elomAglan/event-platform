// App.js
import "./App.css";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";  // Importer le Footer

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barre de navigation */}
      <Navbar />

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
          <button className="cta-button create">Créer un événement</button>
          <button className="cta-button join">Participer à un événement</button>
        </div>
      </header>

      {/* Contenu principal avec un espacement généreux avant Page1 */}
      <main className="flex-grow mt-20 md:mt-40 py-16"> {/* Ajuste la marge ici */}
        <Page1 />
      </main>

      {/* Footer Section */}
      <Footer /> {/* Ajout du Footer */}
    </div>
  );
}

export default App;