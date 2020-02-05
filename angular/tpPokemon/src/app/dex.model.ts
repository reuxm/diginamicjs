export class DexModel {
	
	private _pokemons = new Array<Pokemon>() ;
	
	constructor() {  }
	
	pokemons() {
		return this._pokemons;
	}
	
	add( p : Pokemon ) {
		this._pokemons.push( p );
	}
}

export class Pokemon {
	
	private _specie : string;
	private _description : string;
	private _types : Array<string>;

    constructor( { specie, description, types } ) {
        this._specie = specie;
        this._description = description;
        this._types = types;
    }

	public get specie() {
		return this._specie;
	}
	
	public get description() {
		return this._description;
	}
	
	public get types() {
		return this._types;
	}

}
