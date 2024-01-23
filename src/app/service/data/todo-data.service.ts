import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username: string)
  {
    // call the http service -  call http service asyncronously observable
    console.log("Hello world service - to be called. ")
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number)
  {
    // call the http service -  call http service asyncronously observable
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number)
  {
    // call the http service -  call http service asyncronously observable
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo:Todo)
  {
    // call the http service -  call http service asyncronously observable
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);

  }
  createTodo(username: string, todo:Todo)
  {
    // call the http service -  call http service asyncronously observable
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo);

  }
}
