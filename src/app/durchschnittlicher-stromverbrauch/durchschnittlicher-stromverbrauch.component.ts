import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-durchschnittlicher-stromverbrauch',
  standalone: true,
  imports: [],
  templateUrl: './durchschnittlicher-stromverbrauch.component.html',
  styleUrl: './durchschnittlicher-stromverbrauch.component.css'
})
export class DurchschnittlicherStromverbrauchComponent implements OnInit {
  durchschnittlicherVerbrauch: number;

  constructor() {
    this.durchschnittlicherVerbrauch = this.berechneDurchschnittlichenVerbrauch();
  }

  ngOnInit(): void {}

  berechneDurchschnittlichenVerbrauch(): number{
    // Beispielhafte Berechnung des durchschnittlichen Verbrauchs
    const verbrauchswerte = [10, 12, 9, 11, 13, 10, 12]; // Beispielwerte in kWh
    const summe = verbrauchswerte.reduce((a, b) => a + b, 0);
    return summe / verbrauchswerte.length;
  }
}
