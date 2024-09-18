import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-core',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})

export class CoreComponent {

  isOn: boolean = false;
  selectedOption: string = 'daily';

  togglePower() {
    this.isOn = !this.isOn;
    this.mockApiCall();
  }

  mockApiCall() {
    const apiUrl = 'apiUrl/SocetPower';
    if(this.isOn){
      console.log('API response:' + 'Socet was turned off');
    }
    else{
      console.log('API response:' + 'Socet was turned on');
    }
  }

  onOptionChange(option: string) {
    this.selectedOption = option;
  }
}
