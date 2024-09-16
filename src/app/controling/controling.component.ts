import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'controling-component',
  standalone: true,
  templateUrl: './controling.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './controling.component.css'
})
export class ControlingComponent {

  isOn: boolean = false;
  selectedOption: string = 'daily';

  constructor(private http: HttpClient) {}
  togglePower() {
    this.isOn = !this.isOn;
    this.mockApiCall();
  }

  mockApiCall() {
    const apiUrl = 'https://mockapi.example.com/togglePower';
    this.http.post(apiUrl, { powerStatus: this.isOn }).subscribe(response => {
      console.log('API response:', response);
    });
  }

  onOptionChange(option: string) {
    this.selectedOption = option;
  }
}
