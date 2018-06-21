import { Component, OnInit } from '@angular/core';
import { Highcharts, StockChart, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  stockChart: Chart;

  ngOnInit(): void {
    this.stockChart = new Chart(
      {

      chart: {
                //zoomType: 'x',
        panning: true,
        panKey: 'shift'
            },
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    
     tooltip: {
            split: false,
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1970,
            findNearestPointBy: 'xy',
                marker: {
                    enabled: true
                }
        }
    },
    mapNavigation: {
    enableMouseWheelZoom: true,
    
  },

    series: [{
        name: 'Installation',
         data: [
                [Date.UTC(1970, 10, 4), 1], // altered to be on same X value as next point
                [Date.UTC(1970, 10, 4), 1.1],
                [Date.UTC(1970, 10, 6), 1.25],
                [Date.UTC(1970, 10, 7), 1.25],
                [Date.UTC(1970, 10, 8), 1.25],
                [Date.UTC(1970, 10, 9), 1.25],
                [Date.UTC(1970, 10, 10), 1.25],
                [Date.UTC(1970, 10, 11), 1.25],
                [Date.UTC(1970, 10, 11), 2.25],
                [Date.UTC(1970, 10, 11), 3.25],
                [Date.UTC(1970, 10, 11), 4.25],
                [Date.UTC(1970, 10, 12), 1.25],
                [Date.UTC(1970, 10, 13), 1.25],
                [Date.UTC(1970, 10, 14), 1.25],
                [Date.UTC(1970, 10, 15), 1.25],
                [Date.UTC(1970, 10, 16), 1.25],
                [Date.UTC(1970, 10, 17), 1.25],
                [Date.UTC(1970, 10, 18), 1.25],
                [Date.UTC(1970, 10, 19), 1.25],
                [Date.UTC(1970, 10, 20), 1.25],
                [Date.UTC(1970, 10, 21), 1.25],
                [Date.UTC(1970, 10, 22), 1.25],
                [Date.UTC(1970, 10, 23), 1.25],
                [Date.UTC(1970, 10, 24), 1.25],
                [Date.UTC(1970, 10, 25), 1.25],
                [Date.UTC(1970, 10, 26), 1.25],
                [Date.UTC(1970, 10, 27), 1.25],
                [Date.UTC(1970, 10, 28), 1.25],
                [Date.UTC(1970, 10, 29), 1.25],
                [Date.UTC(1970, 10, 30), 1.25],
                [Date.UTC(1970, 11, 1), 1.25],
                
                
            ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
   });

  }
}
