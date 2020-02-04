import { Injectable } from '@angular/core';
import { Todo, todos } from './model'

@Injectable()
export class TodoListService {

	todolist : todos;
	nextId : 0;
	
	constructor() {
		this.todolist = [];
	}
	
	getAll() : todos {
		return this.todolist;
	}
	
	get( id : number ) {
		return this.todolist.reduce(
			(acc, tache) => tache.id==id?tache:acc
			,null
		);
	}
	
	getNewId() : number {
		return this.nextId;
	}
	
	add( todo : Todo ) {
		todo.id = this.nextId;
		this.nextId++;
		this.todolist.push( todo );
	}
	
	edit( todo : Todo ) {
		this.todolist.forEach(
			tache => {
				if( tache.id == todo.id ) {
					tache.label = todo.label;
				}
			}
		);
	}
	
	delete( todo : Todo ) {
		this.todolist = this.todolist.filter(
			tache => tache.id == todo.id
		);
	}
	
}
