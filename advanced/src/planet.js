class Planet {
	constructor( { name, population } ) {
		this._name = name;
		this._population = population;
	}
	get name() {
		return this._name;
	}
	get population() {
		return this._population;
	}
	static cPlanetsPop( planets ) {
		return planets.reduce(
			(acc,p) => {
				let value = parseInt(p.population);
				return acc + (value?value:0);
			}
			, 0
		);
	}
}

module.exports = Planet;