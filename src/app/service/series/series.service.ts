import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private min = -3 * Math.PI
  private max = 3 * Math.PI
  private xy : Map<number,number> = new Map()
  constructor(@Optional() private logservice : LogService) { } // sin(2i +1)x / (2i + 1)^3  0<x<pi
  getSeries(x: number): number {
    let result = 1
    let term = 1
    let i = 1
    
    while (Math.abs(term) > 1e-10) {
      term *= x * x / (2 * i) / (2 * i - 1)
      result += term
      i++
    }
    
    return result
  }
  getTab(xn:number = this.min,xk:number = this.max,h:number=0.01):Map<number,number>{
    let x = xn+h
    let y = 0
    while(x<xk){
      y = this.getSeries(x)
      this.xy.set(x,y)
      if(this.logservice){
        this.logservice.write("x=" + x.toFixed(2) +" y=" + y.toFixed(4))
      }
      x+=h
    }
    return this.xy
  }
}
