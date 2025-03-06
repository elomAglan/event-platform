import React, { useState, useRef, useEffect } from "react";
import useValidateur from "./useValidateur"; // Hook de validation
import "./Validateur.css";
import { Html5QrcodeScanner } from "html5-qrcode"; // Scanner QR Code

const Validateur = () => {
  const { errors, validate, isValid, resetErrors } = useValidateur();
  const [ticketCode, setTicketCode] = useState("");
  const [qrResult, setQrResult] = useState("");
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [isScannerInitialized, setIsScannerInitialized] = useState(false);
  const scannerRef = useRef(null);
  const scannerContainerId = "qr-reader";

  // Fonction pour gérer la saisie manuelle
  const handleChange = (e) => {
    setTicketCode(e.target.value);
    validate("ticketCode", e.target.value);
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      alert("Ticket validé avec succès !");
    }
  };

  // Fonction pour réinitialiser
  const handleReset = () => {
    setTicketCode("");
    setQrResult("");
    resetErrors();
    stopScanner(); // Arrête le scanner proprement
  };

  // Fonction pour démarrer le scanner
  const startScanner = () => {
    setIsScannerVisible(true);
  };

  // Fonction pour arrêter et supprimer le scanner
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.clear()
        .then(() => {
          console.log("Scanner arrêté.");
          scannerRef.current = null;
          setIsScannerInitialized(false);
        })
        .catch((err) => console.warn("Erreur lors de l'arrêt du scanner:", err));
    }
    setIsScannerVisible(false);
  };

  // Initialisation du scanner après affichage
  useEffect(() => {
    if (isScannerVisible && !isScannerInitialized) {
      scannerRef.current = new Html5QrcodeScanner(scannerContainerId, {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        disableFlip: false,
      });

      scannerRef.current.render(
        (decodedText) => {
          setQrResult(decodedText);
          setTicketCode(decodedText);
          validate("ticketCode", decodedText);
          stopScanner(); // Ferme le scanner après scan réussi
        },
        (error) => console.warn("Erreur de scan QR :", error)
      );

      setIsScannerInitialized(true);
    }
  }, [isScannerVisible, isScannerInitialized]);

  return (
    <div className="validateur-container">
      <div className="validateur-content">
        <h1>Validateur de Ticket</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <div className={`input-group ${errors.ticketCode ? "error" : ""}`}>
            <label htmlFor="ticketCode">Code du Ticket</label>
            <input
              type="text"
              name="ticketCode"
              id="ticketCode"
              value={ticketCode}
              onChange={handleChange}
              placeholder="Entrez votre code de ticket"
              className={errors.ticketCode ? "input-error" : ""}
            />
            {errors.ticketCode && <div className="error-message">{errors.ticketCode}</div>}
          </div>
          <div className="button-group">
            <button type="submit" disabled={!isValid()}>Valider le Ticket</button>
            <button type="button" onClick={handleReset}>Réinitialiser</button>
          </div>
        </form>

        <div className="qr-scanner">
          <h3>Scanner un QR Code</h3>
          {!isScannerVisible ? (
            <button onClick={startScanner}>Scanner</button>
          ) : (
            <button onClick={stopScanner} className="btn-danger">Arrêter le Scanner</button>
          )}
          {isScannerVisible && <div id={scannerContainerId} style={{ width: "100%" }}></div>}
          {qrResult && <p>Résultat : {qrResult}</p>}
        </div>
      </div>
    </div>
  );
};

export default Validateur;
