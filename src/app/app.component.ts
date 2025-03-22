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

  openBridgeLabzSite(){
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
