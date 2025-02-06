import Bd from 'mysql';

const RouteGrottes = () => {

    //connexion Bd 
    const connection = Bd();
	// Exemple de requête pour tester la connexion
	connection.query("SELECT * FROM ma_table", (err, results) => {
		if (err) {
			console.error("Erreur lors de la requête : ", err);
			return;
		}
		console.log("Résultats de la requête : ", results);
	});
};

export default RouteGrottes;