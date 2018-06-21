import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';
import * as highmaps from 'highcharts/modules/map.src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ChartModule
  ],
 // providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ]}],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] }],
//  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
