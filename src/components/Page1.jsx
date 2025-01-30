import React from "react";
import "./Page1.css"; // Importation du fichier CSS

// Événements généraux
const events = [
  {
    id: 1,
    title: "Festival de Musique",
    date: "15 Dec 2025 à 16h 30 GMT ",
    location: "Dakar, Sénégal",
    Ticket: "Ticket à partir de 5000",
    image: "/event1.jpg",
  },
  {
    id: 2,
    title: "Conférence Tech",
    date: "22 Avril 2025 à 16h 30 GMT",
    location: "Abidjan, Côte d'Ivoire",
    Ticket: "Ticket à partir de 5000",
    image: "/image3.jfif",
  },
  {
    id: 3,
    title: "Salon de l'Entrepreneuriat",
    date: "5 Juin 2025 à 16h 30 GMT",
    location: "Cotonou, Bénin",
    Ticket: "Ticket à partir de 5000",
    image: "/event4.jpg",
  },
];

// Événements Concerts
const concerts = [
  {
    id: 1,
    title: "Concert de Jazz",
    date: "1er Mars 2025 à 16h 30 GMT",
    location: "Dakar, Sénégal",
    Ticket: "Ticket à partir de 5000",
    image: "/concert1.jpg",
  },
  {
    id: 2,
    title: "Concert Rock",
    date: "25 Avril 2025 à 16h 30 GMT",
    location: "Abidjan, Côte d'Ivoire",
    Ticket: "Ticket à partir de 5000",
    image: "/concert2.jpg",
  },
  {
    id: 3,
    title: "Concert Reggae",
    date: "30 Mai 2025 à 16h 30 GMT",
    location: "Lomé, Togo",
    Ticket: "Ticket à partir de 5000",
    image: "/concert3.jpg",
  },
];

// Événements Sportifs
const sports = [
  {
    id: 1,
    title: "Match de Football",
    date: "10 Mai 2025 à 16h 30 GMT",
    location: "Lomé, Togo",
    Ticket: "Ticket à partir de 5000",
    image: "/sport1.jpg",
  },
  {
    id: 2,
    title: "Marathon International",
    date: "20 Juillet 2025 à 16h 30 GMT",
    location: "Dakar, Sénégal",
    Ticket: "Ticket à partir de 5000",
    image: "/sport2.jpg",
  },
  {
    id: 3,
    title: "Tournoi de Basketball",
    date: "5 Août 2025 à 16h 30 GMT",
    location: "Abidjan, Côte d'Ivoire",
    Ticket: "Ticket à partir de 5000",
    image: "/sport3.jpg",
  },
];

const Page1 = () => {
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
              <img src={event.image} alt={event.title} className="w-full" />
              <div className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-details">{event.date}</p>
                <p className="event-card-details">{event.location}</p>
                <p className="event-card-ticket">{event.Ticket}</p> {/* Affichage du prix du ticket */}
                <button className="event-button">Acheter ticket</button>
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
              <img src={concert.image} alt={concert.title} className="w-full" />
              <div className="event-card-content">
                <h3 className="event-card-title">{concert.title}</h3>
                <p className="event-card-details">{concert.date}</p>
                <p className="event-card-details">{concert.location}</p>
                <p className="event-card-ticket">{concert.Ticket}</p> {/* Affichage du prix du ticket */}
                <button className="event-button">Acheter ticket</button>
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
              <img src={sport.image} alt={sport.title} className="w-full" />
              <div className="event-card-content">
                <h3 className="event-card-title">{sport.title}</h3>
                <p className="event-card-details">{sport.date}</p>
                <p className="event-card-details">{sport.location}</p>
                <p className="event-card-ticket">{sport.Ticket}</p> {/* Affichage du prix du ticket */}
                <button className="event-button">Acheter ticket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page1;
