import { RecursionService } from '../service/recursion/recursion.service';
import { SeriesService } from '../service/series/series.service';
import { TabService } from './../service/tab/tab.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables, ChartData } from 'chart.js';
Chart.defaults.interaction.mode = 'nearest';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef
  lineChart: any
  xyTab = new Map()
  xyRecursion = new Map()
  xySeries = new Map()
  xyInput = new Map()
  constructor(private tab_service : TabService, private series_service: SeriesService, private recursion_service: RecursionService, ) { Chart.register(...registerables)}

  ngOnInit() {
  }
  lineChartMethod() {
    if (this.lineCanvas instanceof Chart) {
      this.lineCanvas.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: [...this.xyTab.keys()].map(key => key.toFixed(2)),
        datasets:[
          {
            label: 'Табулювання',
            fill: false,
            borderColor: 'rgba(75,192,192,1)'  ,
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: [...this.xyTab.values()].map(value => value.toFixed(4)),
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            fill: false,
            borderColor:  'rgba(192,75,75,1)' ,
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: [...this.xyRecursion.values()].map(value => value.toFixed(4)),
            spanGaps: false,
          },
          {
            label: 'Ряд',
            fill: false,
            borderColor: 'rgba(75,75,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: [...this.xySeries.values()].map(value => value.toFixed(4)),
            spanGaps: false,
          }
        ]
      }
    });
  }

  calculate(xn:any,xk:any,h:any){
    let xn1 = parseFloat(xn)
    let xk1 = parseFloat(xk)
    let h1 = parseFloat(h)
    if(isNaN(xn1) || isNaN(xk1) || isNaN(h1)){
      throw new Error("Значення не числові")
    }
    if(xn1>=xk1){
      throw new Error("Xn1 має бути більшим за Xk1")
    }
    console.log("Табулювання")
    this.xyTab =this.tab_service.getTab(xn1,xk1,h1)
    console.log("Рекурсія")
    this.xyRecursion = this.recursion_service.getTab(xn1,xk1,h1)
    console.log("Ряд")
    this.xySeries = this.series_service.getTab(xn1,xk1,h1)
    this.xyTab.forEach((value,key,map) =>{
      let s = 'Таб: '
      let y : number = 0
      y = value
      s += y.toFixed(4) + ' Рек: '
      y = this.xyRecursion.get(key)
      s += y.toFixed(4)
      y = this.xySeries.get(key)
      s +=' Ряд: '+ y.toFixed(4)
      let x = key
      this.xyInput.set(x.toFixed(2),s)
    
    })
    this.lineChartMethod();      
  }

}
