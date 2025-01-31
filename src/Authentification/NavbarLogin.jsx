// NavbarLogin.js
import React from "react";
import { Link } from "react-router-dom";

function NavbarLogin() {
  return (
    <nav className="navbar-login">
      <div className="container">
        <Link to="/" className="logo">Eventify</Link>
        <ul>
          <li><Link to="/login">Se connecter</Link></li>
          <li><Link to="/register">S'inscrire</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarLogin;
