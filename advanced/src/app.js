const axios = require('axios');
const Planet = require('./planet.js');

async function run() {
	let planets = [];
	await axios.get('https://dragon-ball-api.herokuapp.com/api/planet/')
	.then(
		res => {
			res.data
			.forEach(p => { 
				let planet = new Planet( p );
				planets.push( planet );
			}
			)
		}
	)
	.catch( error => {
		if (error.response) {
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			console.log(error.request);
		} else {
			console.log('Error', error.message);
		}
		console.log(error.config);
	});

	planets.forEach(
		p => console.log(`Planete ${p.name} - Population : ${p.population}`)
	);
	console.log( `Populaton totale ${Planet.cPlanetsPop( planets )}` );
}

run();