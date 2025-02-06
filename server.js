import express from 'express';
import categories from './RouteCategories.js';
import Grottes from './RouteGrottes.js'
import cors from 'cors';

const app = express();
const Port = 4242;

// Middleware pour activer CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Utiliser les routes
app.use('/categories', categories);
app.use('/grottes', Grottes);

// Démarrer le serveur
app.listen(Port, () => {
  console.log(`Serveur démarré sur http://localhost:${Port}`);
});