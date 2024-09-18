import { Component } from '@angular/core';
import {Chart, ChartModule} from 'angular-highcharts';


@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    ChartModule
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})

export class GraphComponent {
  title = 'angular-charts';

  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Socket 1'
    },
    yAxis: {
      title: {
        text: 'Energy in kWh'
      }
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 1 to 24'
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 1
      }
    },
    series: [
      {
        name: 'Energy Consumtion',
        data: [0.105, 0.2, 0.3,0.6,0.9,0.17,0.205,0.104,0.5,0.2,0.16,0.105, 0.2, 0.3,0.6,0.9,0.17,0.205,0.104,0.5,0.2,0.16,0.3,1.12]
      } as any
    ]
  })
}

