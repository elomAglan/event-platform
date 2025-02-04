import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page1.css"; // Importation du fichier CSS

// Données des événements
const events = [
  { id: 1, title: "Festival de Musique", date: "15 Dec 2025 à 16h 30 GMT", location: "Dakar, Sénégal", Ticket: "Ticket à partir de 5000 FCFA", image: "/event1.jpg" },
  { id: 2, title: "Conférence Tech", date: "22 Avril 2025 à 16h 30 GMT", location: "Abidjan, Côte d'Ivoire", Ticket: "Ticket à partir de 5000 FCFA", image: "/image3.jfif" },
  { id: 3, title: "Salon de l'Entrepreneuriat", date: "5 Juin 2025 à 16h 30 GMT", location: "Cotonou, Bénin", Ticket: "Ticket à partir de 5000 FCFA", image: "/event4.jpg" },
];

// Données des concerts
const concerts = [
  { id: 1, title: "Concert de Jazz", date: "1er Mars 2025 à 16h 30 GMT", location: "Dakar, Sénégal", Ticket: "Ticket à partir de 5000 FCFA", image: "/concert1.jpg" },
  { id: 2, title: "Concert Rock", date: "25 Avril 2025 à 16h 30 GMT", location: "Abidjan, Côte d'Ivoire", Ticket: "Ticket à partir de 5000 FCFA", image: "/concert2.jpg" },
  { id: 3, title: "Concert Reggae", date: "30 Mai 2025 à 16h 30 GMT", location: "Lomé, Togo", Ticket: "Ticket à partir de 5000 FCFA", image: "/concert3.jpg" },
];

// Données des événements sportifs
const sports = [
  { id: 1, title: "Match de Football", date: "10 Mai 2025 à 16h 30 GMT", location: "Lomé, Togo", Ticket: "Ticket à partir de 5000 FCFA", image: "/sport1.jpg" },
  { id: 2, title: "Marathon International", date: "20 Juillet 2025 à 16h 30 GMT", location: "Dakar, Sénégal", Ticket: "Ticket à partir de 5000 FCFA", image: "/sport2.jpg" },
  { id: 3, title: "Tournoi de Basketball", date: "5 Août 2025 à 16h 30 GMT", location: "Abidjan, Côte d'Ivoire", Ticket: "Ticket à partir de 5000 FCFA", image: "/sport3.jpg" },
];

const Page1 = () => {
  const navigate = useNavigate();

  // Fonction pour rediriger vers la page Payeticket en passant l'événement dans l'URL
  const handleBuyTicket = (eventData) => {
    navigate(`/payeticket?event=${encodeURIComponent(JSON.stringify(eventData))}`);
  };

  return (
    <section className="page1-section">
      <div className="container mx-auto text-center">
        {/* Section des événements */}
        <h2 id="events-section" className="page1-title">
          <span>Évé</span>nements à la Une 🎉
        </h2>
        <p className="page1-subtitle">
          Découvrez les événements les plus attendus près de chez vous !
        </p>

        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image w-full h-48 object-cover" />
              <div className="event-card-content p-4">
                <h3 className="event-card-title text-xl font-bold">{event.title}</h3>
                <p className="event-card-details text-sm text-gray-600">{event.date}</p>
                <p className="event-card-details text-sm text-gray-600">{event.location}</p>
                <p className="event-card-ticket text-sm text-blue-600 font-semibold">{event.Ticket}</p>
                <button
                  className="event-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
                  onClick={() => handleBuyTicket(event)}
                >
                  Acheter ticket
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section des Concerts */}
        <h2 id="concerts-section" className="page1-title section-spacing">
          <span>Con</span>certs à venir 🎶
        </h2>
        <p className="page1-subtitle">Les meilleurs concerts dans votre ville !</p>

        <div className="event-grid">
          {concerts.map((concert) => (
            <div key={concert.id} className="event-card">
              <img src={concert.image} alt={concert.title} className="event-image w-full h-48 object-cover" />
              <div className="event-card-content p-4">
                <h3 className="event-card-title text-xl font-bold">{concert.title}</h3>
                <p className="event-card-details text-sm text-gray-600">{concert.date}</p>
                <p className="event-card-details text-sm text-gray-600">{concert.location}</p>
                <p className="event-card-ticket text-sm text-blue-600 font-semibold">{concert.Ticket}</p>
                <button
                  className="event-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
                  onClick={() => handleBuyTicket(concert)}
                >
                  Acheter ticket
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section des Sports */}
        <h2 id="sports-section" className="page1-title section-spacing">
          <span>Évé</span>nements Sportifs ⚽🏀🏃
        </h2>
        <p className="page1-subtitle">Ne manquez pas les compétitions et matchs à venir !</p>

        <div className="event-grid">
          {sports.map((sport) => (
            <div key={sport.id} className="event-card">
              <img src={sport.image} alt={sport.title} className="event-image w-full h-48 object-cover" />
              <div className="event-card-content p-4">
                <h3 className="event-card-title text-xl font-bold">{sport.title}</h3>
                <p className="event-card-details text-sm text-gray-600">{sport.date}</p>
                <p className="event-card-details text-sm text-gray-600">{sport.location}</p>
                <p className="event-card-ticket text-sm text-blue-600 font-semibold">{sport.Ticket}</p>
                <button
                  className="event-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
                  onClick={() => handleBuyTicket(sport)}
                >
                  Acheter ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page1;
