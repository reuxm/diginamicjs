import { Component, OnInit } from '@angular/core';
import { Todo, todos } from '../model';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	todolist : todos;
	
	constructor( private service : TodoListService ) { }

	ngOnInit() {
		this.todolist = this.service.getAll();
	}

}
