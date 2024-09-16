import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routes';
import { GraphComponent } from './app.component';

@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [GraphComponent]
})
export class GraphModule { }
