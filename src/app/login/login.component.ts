import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) 
  {}
  ngOnInit()
  {}
  username = 'in28minutes';
  password = 'pwd28';
  errorMesssage = "Invalid Credentails";
  invalidLogin = false;
  handleLogin(): void {
    // if (this.username === 'in28minutes' && this.password === 'pwd28') {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome',this.username]); // pass in a parameter
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
    console.log(this.username + ' - ' + this.password)
  }
}
