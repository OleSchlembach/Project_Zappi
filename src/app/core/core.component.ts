import {Component, EventEmitter, Output} from '@angular/core';
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

  @Output() optionChanged = new EventEmitter<string>();

  togglePower() {
    this.isOn = !this.isOn;
    this.mockApiCallOnOff();
  }

  mockApiCallOnOff() {
    const apiUrl = 'apiUrl/SocetPower';
    if(this.isOn){
      console.log('API response:' + 'Socet was turned on');
    }
    else{
      console.log('API response:' + 'Socet was turned off');
    }
  }

  onOptionChange(option: string) {
    this.selectedOption = option;
    this.optionChanged.emit(this.selectedOption);
  }
}
