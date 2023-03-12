import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  n : number = 0;
  mas : number[][] = []
  res: number[] = []
  Calculate(num:any){
    try {
      let count:number = 1
      this.n = Math.abs(parseInt(num))
      this.res = []
      if(isNaN(this.n)){
        throw new Error("Parameter is not a number!")
      }
      this.mas = Array(this.n)
      for (let i = 0; i < this.n; i++) {
        this.mas[i] = Array(this.n)
        for (let j = 0; j < this.n; j++) {
          let aa: number = Math.floor(Math.random() * 10 + 1)
          this.mas[i][j] = aa
          }
      }
      for (let j = 0; j < this.n; j++) {
        count = 1
        for (let i = 0; i < this.n; i++) {
          
          if( j % 2 ==0){
            count *= this.mas[i][j];
          }
          
        }
        this.res.push(count)
      }
      for (var i = 0; i < this.res.length; i++) {
        this.res.splice(i+1, 1);
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  getColor(b:number){
    return b % 2 ==0 ? 'green' : 'red';
  }
}
