import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a:number = 0;
  b: number = 0;
  res :number[] = []

  Calculate(a:any, b:any){
    try {
      this.a = parseInt(a);
      this.b = parseInt(b);
      this.res = []
      if((isNaN(this.a)) && (isNaN(this.b))){
        throw new Error("Parameter is not a number!")
      }
      if ( this.a > this.b){
        throw new Error("A is bigger than B!")
      }
      for (let i = a; i <= b; i++) {
        if (i % 55 == 0 && i % 2 ==1 && i % 7 ==3){
          this.res.push(i);
        }
        
      }
      console.log(this.res)
    } catch (error) {
      console.log(error)
    }
  }
}
