import { Component, OnInit } from '@angular/core';
import { Todo, todos } from '../model';
import { TodoListService } from '../todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	todolist : todos;
	
	constructor( private service : TodoListService, private router : Router ) { }

	ngOnInit() {
		this.todolist = this.service.getAll();
	}

	delete( id ) {
		this.service.delete(
			this.service.get( id )
		);
		this.ngOnInit();
	}
	
}
