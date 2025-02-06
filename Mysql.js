import mysql from 'mysql';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const Bd = () => {
  // Utiliser les variables d'environnement pour configurer la connexion
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,         // localhost
    user: process.env.DB_USER,         // root
    password: process.env.DB_PASSWORD, // ton_mot_de_passe
    database: process.env.DB_NAME      // ma_base_de_donnees
  });

  // Connexion à la base de données
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données : ', err);
      return;
    }
    console.log('Connecté à la base de données MySQL');
  });

  // Fermer la connexion après utilisation
  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion : ', err);
      return;
    }
    console.log('Connexion fermée');
  });
};

export default Bd;