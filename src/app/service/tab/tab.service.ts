import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xy = new Map()
  private min = -3*Math.PI
  private max = 3*Math.PI
  constructor(@Optional() private logservice : LogService) { }
  getTab(xn:number =this.min ,xk:number = this.max,h:number=0.01):Map<number,number>{
    let x = xn+h
    let y =0.0
    while(x <xk){
      y = Math.cosh(x)
      this.xy.set(x,y)
      if (this.logservice) {
        this.logservice.write("x=" + x.toFixed(2) +" y=" + y.toFixed(4))
        
      }
      x+=h
    }
    return this.xy
  }
}
