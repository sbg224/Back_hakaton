import express from 'express';
import RouteCategories from './RouteCategories.js';  // Importer les routes de catégories
import RouteGrottes from './RouteGrottes.js';  // Importer les routes de grottes
import RouteImages from './RouteImages.js'
import RouteJoint from "./RouteJoint.js"
import RouteId from "./RouteIdParams.js"
import cors from 'cors';


const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Utiliser les routes pour les catégories
//http://localhost:3000/api/categories
app.use('/api', RouteCategories);

// Utiliser les routes pour les grottes
//http://localhost:3000/api/grottes
app.use('/api', RouteGrottes);  // Les grottes seront sous '/api/grottes'

//http://localhost:3000/api/images
app.use('/api', RouteImages); 

// data globale tables jointent
//http://localhost:3000/api/alldatas
app.use('/api', RouteJoint);

//la route qui spécifie les grottes par l'id
//http://localhost:3000/api/mygrottes/:id
app.use('/api', RouteId)

// Démarrer le serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Serveur démarré sur http://localhost:${port}`);
});
