import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  a:number = 0;
  b:number = 0;
  c:number = 0;
  res:number = 0;
  
  Calculate(a:any, b:any,c:any){
    try{
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.c =  parseInt(c);
      if((isNaN(this.a)) && (isNaN(this.b)) && (isNaN(this.c))){
        throw new Error("Parameter is not a number!")
      }
      if(this.a >=0 && this.b >= 0 && this.c >= 0){
        this.res = (this.a %44 ==0 ? 1: 0) + (this.b %44 ==0 ? 1: 0) + (this.c %44 ==0 ? 1: 0)
        console.log(this.res)
      }
      else{
        throw new Error("Parameter is less than zero!")
      }
    }
    catch(e){
      console.log(e);
    }

  }
}
