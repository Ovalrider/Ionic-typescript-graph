import { Component, OnInit } from '@angular/core';
import Bird from './class/bird';
import HoofedAnimal from './class/hoofed';
import Mammal from './class/mammal';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {

  bird:Bird= new Bird("Birdie")
  hoof:HoofedAnimal = new HoofedAnimal("Bison")
  wolf: Mammal = new Mammal("Wolfie")
  visible: boolean = false
  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    this.visible= true
  }

}
