import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string)
  {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService()
  {
    // call the http service -  call http service asyncronously observable
    console.log("Hello world service - to be called. ")
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloWorldBean')
  }

  executeHelloWorldBeanServiceWithPathVarriable(name: string)
  {
    // call the http service -  call http service asyncronously observable
    console.log("Hello world service - to be called. ")
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorld/pathVariable/${name}`)
  }
}
