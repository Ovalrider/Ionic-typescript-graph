import { Component, OnInit } from '@angular/core';
import Bird from './class/bird';
import HoofedAnimal from './class/hoofed';
import Mammal from './class/mammal';
import { Animal } from './class/animal';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {

  animals : Animal[] = []
  bird!:Bird
  hoof!:HoofedAnimal
  wolf!: Mammal 
  constructor() { }

  ngOnInit() {
  }
  getInfo(){
    this.bird = new Bird("Birdie")
    this.hoof = new HoofedAnimal("Bison")
    this.wolf= new Mammal("Wolfie")
  }

}
