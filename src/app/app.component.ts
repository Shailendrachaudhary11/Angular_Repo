import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  message="hello from BridgeLabz using one way Data Bindings";
  logoUrl="assets/logo-bridge.avif";
  userName: string= ' ';
  errorMessage: string= '';

  validateName(){
    const regexPattern=/^[A-Z][a-zA-Z]{2,}$/;
    if(!regexPattern.test(this.userName)){
      this.errorMessage="Invalid Name! Name must be started with captial letter and must have minimum 2 letters";
      
    }
    else{
      this.errorMessage=" ";
    }
  }

  openBridgeLabzSite(){
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
