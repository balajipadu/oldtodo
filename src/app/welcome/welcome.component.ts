import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  welcomeMessage = "";
  user: any
  name = "Balu"
  constructor(private router: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }
  ngOnInit(): void {
    this.user = this.router.snapshot.params['name'];
    console.log(this.user);
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    // this will obtain the message from the spring boot restservice 
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulResponse(response), error =>this.handleErrorResponse(error));
    return "Hello world"
  }
  handleErrorResponse(error: any): void {
    console.log(error.error);
    console.log(error.message);
    this.welcomeMessage = error.error.message;
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessage = response.message;
  }

  getWelcomeMessageWithPathParameter() {
    console.log(this.welcomeDataService.executeHelloWorldBeanServiceWithPathVarriable(this.name));
    // this will obtain the message from the spring boot restservice 
   // this.welcomeDataService.executeHelloWorldBeanServiceWithPathVarriable(this.name).subscribe(response => this.handleSuccessfulResponse(response), error =>this.handleErrorResponse(error));
        // new implementation
     this.welcomeDataService.executeHelloWorldBeanServiceWithPathVarriable(this.name).
     subscribe(
       {next: (response) => this.handleSuccessfulResponse(response), 
        error: error =>this.handleErrorResponse(error)});

    return "Hello world"
  }
}
