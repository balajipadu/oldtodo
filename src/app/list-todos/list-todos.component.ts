import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { response } from 'express';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //     new Todo(1, "Learn Spring Boot", true, new Date()),
  //     new Todo(2, "Learn Angular", false, new Date()),
  //     new Todo(3, "Learn swimming", false, new Date())
  //     ]
  todos: Todo[] = [];
  message = ""
  constructor(private todoService: TodoDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Balaji').subscribe(
      { next: (response) => { console.log(response); this.todos = response; } }
    )
  }

  deleteTodo(id: number) {
    console.log(" before http call." + id)
    this.todoService.deleteTodo("Balaji", id).
      subscribe({
        next: (response) => { console.log(response); this.message = `${id} is deleted`; }
      });

    this.refreshTodos();
    console.log(" After http call.")
  }
  updateTodo(id: number) {
    console.log("Update TODO " + id)
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    console.log("Add TODO " + -1)
    this.router.navigate(['todos', -1]);
  }

}
