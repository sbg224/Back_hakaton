import express from 'express';
import connection from './Mysql.js';

const router = express.Router();

// Route pour récupérer toutes les grottes
router.get('/mygrotte/:id', (req, res) => {

    const typeid = Number.parseInt(req.params.id);

  // Exécuter la requête SQL pour récupérer les grottes
  connection.query(
    'SELECT * FROM categories INNER JOIN grottes ON grottes.categories_id = categories.id WHERE categories.id = ?',
    [typeid], // Paramètre de la requête pour éviter l'injection SQL
    (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des grottes :', err);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
      }

      // Si aucune grotte n'a été trouvée
      if (results.length === 0) {
        return res.status(404).json({ error: 'Grotte non trouvée' });
      }

      // Retourne la grotte trouvée
      res.status(200).json(results[0]); // Envoie seulement la première grotte trouvée
    }
  );
});

export default router;