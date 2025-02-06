import express from 'express';
import connection from './Mysql.js'; // Importez la connexion Bd ici

const router = express.Router();

// Route pour récupérer toutes les grottes
router.get('/images', (req, res) => {
  // Exécuter la requête SQL pour récupérer les grottes
  connection.query('SELECT * FROM grottes_images', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des grottes :', err);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
    res.status(200).json(results);
  });
});

export default router;
