import { Component } from '@angular/core';
import {Chart, ChartModule} from 'angular-highcharts';

@Component({
  selector: 'app-graph-alt',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graph-alt.component.html',
  styleUrl: './graph-alt.component.css'
})
export class GraphAltComponent {
  title = 'angular-charts';

  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Socket 1 Monthly'
    },
    yAxis: {
      title: {
        text: 'Energy in kWh'
      }
    },
    xAxis: {
      title: {
        text: 'Days'
      },
      accessibility: {
        rangeDescription: 'Range: 1 to 31'
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
        data: [0.105, 1.5, 2.3,4.6,2.9,1.17,2.205,1.104,1.5,1.2,1.16,2.105, 1.2, 3.3,2.6,2.9,3.17,3.205,2.104,3.5,2.2,3.16,3.3,1.12,1.24,2.4,3,1.9]
      } as any
    ]
  })
}
