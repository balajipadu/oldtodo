import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { response } from 'express';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todo: Todo = new Todo(1, "", false, new Date());
  id: number = 1;
  description: string = '';
  targetDate: Date = new Date();
  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date())
    if (this.id != -1) {
      this.todoService.retrieveTodo("Balaji", this.id).subscribe({
        next: (response) => this.todo = response
      })
    }
  }

  saveTodo(): void {
    if (this.id != -1) {
      this.todoService.createTodo("Balaji", this.todo).subscribe({
        next: (response) => { console.log(response); this.router.navigate(['todos']); }
      })
    }
    else {
      this.todoService.updateTodo("Balaji", this.id, this.todo).subscribe({
        next: (response) => { console.log(response); this.router.navigate(['todos']); }
      })
    }
  }
}
