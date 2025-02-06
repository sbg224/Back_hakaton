import express from 'express';
import connection from './Mysql.js'; // Importez la connexion Bd ici

const router = express.Router();

// Route pour récupérer toutes les catégories
router.get('/categories', (req, res) => {
  // Exécuter la requête SQL pour récupérer les catégories
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des catégories :', err);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
    res.status(200).json(results);
  });
});

export default router;
