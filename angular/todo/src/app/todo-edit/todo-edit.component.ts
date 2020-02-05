import { Component, OnInit } from '@angular/core';
import { Todo } from '../model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

	todo : Todo;
	
	constructor( private service : TodoListService, private router : Router, private route : ActivatedRoute ) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		if( id == null ) {
			this.todo = new Todo( 0, '' );
		}
		else {
			this.todo = this.service.get( id );
		}
	}
	
	addTodo() {
		if( this.todo.id == 0 ) {
			this.service.add( this.todo );
		}
		else {
			this.service.edit( this.todo );
		}
		this.router.navigate(['/']);
	}

}
