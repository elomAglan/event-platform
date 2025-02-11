import React from 'react';

const Parametre = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <nav>
          <ul>
            <li><a href="/home" style={styles.link}>Accueil</a></li>
            <li><a href="/parametre" style={styles.link}>Paramètres</a></li>
            <li><a href="/profil" style={styles.link}>Profil</a></li>
            <li><a href="/logout" style={styles.link}>Se déconnecter</a></li>
          </ul>
        </nav>
      </div>
      <div style={styles.mainContent}>
        <h1 style={styles.header}>Paramètres</h1>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Nom d'utilisateur</label>
            <input type="text" id="username" name="username" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Mot de passe</label>
            <input type="password" id="password" name="password" style={styles.input} />
          </div>
          <button type="submit" style={styles.submitButton}>Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  link: {
    display: 'block',
    padding: '10px 0',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Parametre;
