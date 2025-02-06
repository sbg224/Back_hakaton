import express from 'express';
import RouteCategories from './RouteCategories.js';  // Importer les routes de catégories
import RouteGrottes from './RouteGrottes.js';  // Importer les routes de grottes
import RouteImages from './RouteImages.js'
import cors from 'cors';


const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Utiliser les routes pour les catégories
app.use('/api', RouteCategories);

// Utiliser les routes pour les grottes
app.use('/api', RouteGrottes);  // Les grottes seront sous '/api/grottes'

app.use('/api', RouteImages); 

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur http://localhost:${port}`);
});
