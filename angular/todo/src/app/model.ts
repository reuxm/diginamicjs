export class Todo {
	id : number;
    label : string;
	constructor( n : number, s : string ) {
		this.id = n;
		this.label = s;
	}
}

export type todos = Todo[];
