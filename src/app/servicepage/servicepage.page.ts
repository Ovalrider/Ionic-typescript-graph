import { RecursionService } from '../service/recursion/recursion.service';
import { SeriesService } from '../service/series/series.service';
import { TabService } from './../service/tab/tab.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  xyTab = new Map()
  xyRecursion = new Map()
  xySeries = new Map()
  xyInput = new Map()
  constructor(private tab_service : TabService, private series_service: SeriesService, private recursion_service: RecursionService) { }

  ngOnInit() {
  }

  calculate(xn:any,xk:any,h:any){
    let xn1 = parseFloat(xn)
    let xk1 = parseFloat(xk)
    let h1 = parseFloat(h)
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
    //this.input()
  
  }

}
