export default function Home() {
  return (
    <div
      className="hero is-fullheight"
      style={{
        backgroundImage: "url('/images/background.jpeg')", // Chemin vers l'image dans le dossier public
        backgroundSize: "cover", // S'assure que l'image couvre toute la zone
        backgroundPosition: "center", // Positionne l'image au centre
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-white">
            Bienvenue sur la Plateforme d'Événements
          </h1>
          <p className="subtitle is-3 has-text-light">
            Découvrez, organisez et participez à des événements passionnants !
          </p>

          {/* Dessin animé de danse */}
          <div className="dancing-character">
            <span role="img" aria-label="Danse" className="dance-emoji">
              💃
            </span>
          </div>

          <div className="buttons is-centered">
            <a href="/events" className="button is-primary is-large">
              Voir les événements
            </a>
            <a href="/create-event" className="button is-link is-large">
              Créer un événement
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dance-emoji {
          font-size: 4rem;
          animation: dance 1s ease-in-out infinite;
        }

        @keyframes dance {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          25% {
            transform: rotate(10deg) translateY(-20px);
          }
          50% {
            transform: rotate(-10deg) translateY(20px);
          }
          75% {
            transform: rotate(10deg) translateY(-20px);
          }
          100% {
            transform: rotate(0deg) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
