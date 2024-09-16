import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { ControlingComponent } from "./controling/controling.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeScreenComponent, ControlingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}


