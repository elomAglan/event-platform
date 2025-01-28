import "bulma/css/bulma.min.css"; // Importation de Bulma CSS
import "../styles/globals.css"; // Importation de vos autres styles globaux si nécessaire
import "animate.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
