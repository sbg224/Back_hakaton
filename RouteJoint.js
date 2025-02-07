import express from "express";
import connection from "./Mysql.js";

const router = express.Router();

// Route pour récupérer toutes les grottes
router.get("/alldatas", (req, res) => {
	// Exécuter la requête SQL pour récupérer les grottes
	connection.query(
		'SELECT grottes.*, categories.name AS categorie_name, Reservations.date_debut, Reservations.date_fin FROM grottes INNER JOIN categories ON grottes.categories_id = categories.id INNER JOIN Reservations ON grottes.id = Reservations.grottes_id',
		(err, results) => {
			if (err) {
				console.error("Erreur lors de la récupération des grottes :", err);
				return res.status(500).json({ error: "Erreur interne du serveur" });
			}
			res.status(200).json(results);
		},
	);
});

export default router;
