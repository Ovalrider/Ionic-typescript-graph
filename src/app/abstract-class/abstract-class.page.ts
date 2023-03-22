import { Component, OnInit } from '@angular/core';
import { QuadPrism } from './class/quadprism';
import { TriPrism } from './class/triprism';
import { Prism } from './class/prism';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  prisms : Prism[] = []
  minVolumePrism :any

  constructor() { }

  ngOnInit() {
  }

  getRandomInt(n:number){
    return Math.floor(Math.random() * Math.floor(n) + 1);
  }
  result(arr_num : any){
    let num = parseInt(arr_num)
    if(num <= 0){
      alert("Number is less or equal to zero")
      throw new Error("Number is less or equal to zero")
    }
    this.prisms = new Array()
    for (let index = 0; index < num; index++) {
      this.prisms.push(new TriPrism("Трикутна призма", this.getRandomInt(100),this.getRandomInt(500)))
      this.prisms.push(new QuadPrism("Чотирикутна призма", this.getRandomInt(100),this.getRandomInt(100)))
      
    }
    this.minVolumePrism = this.prisms[0]
    this.prisms.forEach((elem) => {
      elem.calc_volume()
      if (this.minVolumePrism.V > elem.V){
        this.minVolumePrism = elem
      }
    })
  }

  getGreenColor(el:number){
    return Math.abs(el - this.minVolumePrism.V) <=0.01 ? 'lightgreen' : ''
  }

}
