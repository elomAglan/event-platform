import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Payeticket.css";

const Payeticket = () => {
  const [searchParams] = useSearchParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const eventInfo = searchParams.get("event");
    if (eventInfo) {
      setEventData(JSON.parse(decodeURIComponent(eventInfo)));
    }
  }, [searchParams]);

  const handlePayment = async (method) => {
    if (!eventData) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: eventData.id,
          eventName: eventData.title,
          price: eventData.price,
          method,
        }),
      });

      const { sessionId } = await response.json();

      if (sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
      }
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payeticket-container">
      {eventData ? (
        <div className="payeticket-content">
          <div className="payeticket-info">
            <h1 className="payeticket-title">{eventData.title}</h1>
            <p className="payeticket-description">{eventData.description}</p>
            <p className="payeticket-date"><strong>📅 Date :</strong> {eventData.date}</p>
            <p className="payeticket-location"><strong>📍 Lieu :</strong> {eventData.location}</p>
            <p className="payeticket-organizer"><strong>👤 Organisateur :</strong> {eventData.organizer}</p>
            <p className="payeticket-price"><strong>🎟 Prix du ticket :</strong> {eventData.price} €</p>

            <h2 className="payeticket-payment-title">Choisissez votre moyen de paiement :</h2>
            <div className="payeticket-payment-options">
              <button className="payeticket-button" onClick={() => handlePayment("stripe")} disabled={loading}>
                {loading ? "Chargement..." : "💳 Payer par Carte (Stripe)"}
              </button>
              <button className="payeticket-button" onClick={() => handlePayment("paypal")} disabled={loading}>
                {loading ? "Chargement..." : "🅿️ Payer avec PayPal"}
              </button>
              <button className="payeticket-button" onClick={() => handlePayment("mobile")} disabled={loading}>
                {loading ? "Chargement..." : "📱 Mobile Money"}
              </button>
            </div>
          </div>

          <div className="payeticket-image-container">
            <img src={eventData.image} alt={eventData.title} className="payeticket-image" />
          </div>
        </div>
      ) : (
        <p className="payeticket-error-message">Aucune information sur l'événement</p>
      )}
    </div>
  );
};

export default Payeticket;
