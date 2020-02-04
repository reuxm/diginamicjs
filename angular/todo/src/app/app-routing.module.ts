import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes : Routes = [
    { path: 'list', component: TodoListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list' },
	{ path : 'add', component : TodoEditComponent },
	{ path : 'edit/:id', component : TodoEditComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
