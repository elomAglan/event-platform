import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logo">Eventify</h1>

      {/* Catégories affichées directement */}
      <div className="nav-categories">
        <a href="#" className="nav-link">Concerts</a>
        <a href="#" className="nav-link">Conférences</a>
        <a href="#" className="nav-link">Sport</a>
        <a href="#" className="nav-link">Festivals</a>
        <a href="#" className="nav-link">Autres</a>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link">Sign In</a>
        <a href="#" className="nav-link">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
