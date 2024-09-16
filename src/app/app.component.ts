import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { GraphComponent} from "./graph/graph.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeScreenComponent, GraphComponent],
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


