import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy : number = 0
  private xy = new Map()
  private min = -3 * Math.PI
  private max = 3 * Math.PI

  constructor(@Optional() private logservice : LogService) { }

  getRecursion(x: number, result:number, term: number, i:number){ 
    //  r=1 t=1 i = 1
    term *= x * x / (2 * i) / (2 * i - 1)
    result += term
    i++
    if (Math.abs(term) > 1e-10) {
      this.getRecursion(x, result, term, i)
    }
    else{
      this.yy = result
    }   
  
  }

  getTab(xn:number = this.min,xk:number = this.max,h:number=0.01 ):Map<number,number>{
    let x = xn+h
    while(x<xk){
      this.getRecursion(x, 1, 1, 1) // r=1 t=1 i =1
      this.xy.set(x,this.yy)
      if(this.logservice){
        this.logservice.write("x=" + x.toFixed(2) +" y=" + this.yy.toFixed(4))
      }    
      x+=h
    }

    
    
    return this.xy
  }
}
