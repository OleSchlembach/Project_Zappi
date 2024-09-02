import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DurchschnittlicherStromverbrauchComponent } from "./durchschnittlicher-stromverbrauch/durchschnittlicher-stromverbrauch.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { ContactScreenComponent } from "./contact-screen/contact-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DurchschnittlicherStromverbrauchComponent, HomeScreenComponent, ContactScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zappi';
  showHomeScreen = true;
  showContactsScreen = false;

  switchToContactScreen(){
    this.toggleHomeScreen();
    this.toggleContactScreen();
  }

  toggleHomeScreen(){
    this.showHomeScreen = !this.showHomeScreen;
  }
  toggleContactScreen(){
    this.showContactsScreen = !this.showContactsScreen;
  }
}


