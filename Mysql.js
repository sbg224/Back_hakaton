import mysql from 'mysql2'; // Utilisation d'import pour mysql2
import dotenv from 'dotenv';  // Pour charger les variables d'environnement

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Créer la connexion à la base de données avec les variables d'environnement
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',  // Utiliser la variable d'environnement ou localhost
  user: process.env.DB_USER || 'root',      // Utiliser la variable d'environnement ou root
  password: process.env.DB_PASSWORD || 'MPD ici',  // Utiliser la variable d'environnement ou un mot de passe par défaut
  database: process.env.DB_NAME || 'HACKATON'  // Utiliser la variable d'environnement ou ""
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('❌ Erreur de connexion à MySQL :', err);
    return;
  }
  console.log('✅ Connecté à MySQL');
});

// Exporter la connexion pour l'utiliser dans d'autres modules
export default connection;
