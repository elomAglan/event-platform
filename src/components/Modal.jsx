import React from "react";

const Modal = ({ isOpen, onClose, title, message, type }) => {
  if (!isOpen) return null;

  // Styles en fonction du type de message
  const typeStyles = {
    success: { backgroundColor: "#d4edda", borderColor: "#155724", color: "#155724" },
    error: { backgroundColor: "#f8d7da", borderColor: "#721c24", color: "#721c24" },
    info: { backgroundColor: "#cce5ff", borderColor: "#004085", color: "#004085" },
    warning: { backgroundColor: "#fff3cd", borderColor: "#856404", color: "#856404" },
  };

  const currentStyle = typeStyles[type] || { backgroundColor: "#f8f9fa", borderColor: "#6c757d", color: "#343a40" };

  return (
    <div style={styles.overlay}>
      <div style={{ ...styles.modal, borderLeft: `5px solid ${currentStyle.borderColor}` }}>
        {/* Titre */}
        <h2 style={{ ...styles.title, color: currentStyle.color }}>{title}</h2>

        {/* Message */}
        <p style={styles.message}>{message}</p>

        {/* Bouton Fermer */}
        <div style={styles.footer}>
          <button style={styles.closeButton} onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

// Styles CSS en JS
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "350px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  message: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "20px",
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  closeButton: {
    padding: "8px 12px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Modal;
