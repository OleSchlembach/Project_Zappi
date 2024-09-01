import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DurchschnittlicherStromverbrauchComponent
} from "./durchschnittlicher-stromverbrauch/durchschnittlicher-stromverbrauch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DurchschnittlicherStromverbrauchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zappi';
}
