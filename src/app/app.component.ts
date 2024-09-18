import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponent } from "./core/core.component";
import { GraphComponent } from "./graph/graph.component";
import { GraphAltComponent } from "./graph-alt/graph-alt.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreComponent, GraphComponent, GraphAltComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zappi3';
  showDailyGraph: boolean = true;
  showMonthlyGraph: boolean = false;

  updateBooleans(option: string) {
    if (option === 'daily') {
      this.showDailyGraph = true;
      this.showMonthlyGraph = false;
    } else {
      this.showDailyGraph = false;
      this.showMonthlyGraph = true;
    }
  }
}
