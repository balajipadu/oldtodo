import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//welcome component
const routes: Routes = [
  { path: '', component: LoginComponent }, // can be activated for condition 
  { path: 'welcome/:name', component: WelcomeComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: ListTodosComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent } // place is at the very last - default case (** path)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
