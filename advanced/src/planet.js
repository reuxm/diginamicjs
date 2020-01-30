class Planet {
	constructor( { name, residents } ) {
		this._name = name;
		this._population = residents.length;
	}
	get name() {
		return this._name;
	}
	get population() {
		return this._population;
	}
	static cPlanetsPop( planets ) {
		return planets.reduce(
			(acc,p) => { return acc + p.population; }
			, 0
		);
	}
}

module.exports = Planet;