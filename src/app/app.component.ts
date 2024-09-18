import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponent } from "./core/core.component";
import { GraphComponent } from "./graph/graph.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreComponent, GraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zappi3';
}
