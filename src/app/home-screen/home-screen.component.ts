import { Component } from '@angular/core';
import { ControlingComponent } from '../controling/controling.component';

@Component({
  selector: 'home-screen-component',
  standalone: true,
  imports: [ControlingComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
