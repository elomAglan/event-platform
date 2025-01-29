import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Importer le fichier CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Réseaux sociaux alignés à gauche */}
        <div className="social-icons">
          <a href="#" className="social-icon facebook">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="#" className="social-icon twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="social-icon instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" className="social-icon linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2025 Eventify. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
