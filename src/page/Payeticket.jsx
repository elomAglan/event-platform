import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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

  const handlePayment = async () => {
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
    <div className="payment-container">
      {eventData ? (
        <>
          <h1>{eventData.title}</h1>
          <p>{eventData.description}</p>
          <p className="price">Prix du ticket : {eventData.price} €</p>
          <button onClick={handlePayment} disabled={loading}>
            {loading ? "Chargement..." : "Payer maintenant"}
          </button>
        </>
      ) : (
        <p>Aucune information sur l'événement</p>
      )}
    </div>
  );
};

export default Payeticket;
