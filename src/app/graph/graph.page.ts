import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart, registerables, ChartData } from 'chart.js';
Chart.defaults.interaction.mode = 'nearest';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit{

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef
  lineChart: any
  xx: String[] = []
  yy: number[] = []
  xn:number = 0
  xk:number = 0
  h:number = 0
  param: number = 0
  res: String[] = []
  constructor() { Chart.register(...registerables)}
  ngOnInit(){

  }
  
  private func1(x:number){
    return Math.abs(x) * Math.sin((3*x))
  }
  private func2(x:number){
    return  x*x*x * Math.cos((x+2))
  }
  private func3(x:number){
    return  Math.sin((x*x)) + Math.pow(x,0.25)
  }
  lineChartMethod(){
    if ( this.lineChart instanceof Chart){
      this.lineChart.destroy()
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets:[
          {
            label: 'Графік функції',
            fill: false,
            borderColor:'rgba(75,192,192,1)',
            borderDashOffset:0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    })
  }
  // a=-55, b=10.33, h=0.1
  BuildGraph(a:any,b:any,par:any,h:any){
    this.xn = parseFloat(a)
    this.xk = parseFloat(b)
    this.param = parseFloat(par)
    this.h = parseFloat(h)
    this.res = []
    this.xx = new Array()
    this.yy = new Array()
    let x = this.xn
    let y = 0
    if(isNaN(this.xn) ||isNaN(this.xk) || isNaN(this.param) || isNaN(this.h)){
      throw new Error("Parameter is not a number")
    }
    if(this.xn > this.xk){
      throw new Error("Xn is bigger than xk")
    }
    while(x <= this.xk){
      if (x <=0) {
        y = this.func1(x)
      } else {
        if (x <= this.param){
          y = this.func2(x)
        }
        else{
          y = this.func3(x)
        }
      }
      let s = "x= " + x.toFixed(1) + ", y= "+ y.toFixed(1)
      this.xx.push(x.toFixed(1))
      this.yy.push(parseFloat(y.toFixed(1)))
      this.res.push(s)
      x = x + this.h
    }
    this.lineChartMethod()
  }
}
