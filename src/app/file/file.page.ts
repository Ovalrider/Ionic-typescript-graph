import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  disableButton=false;
  data : any = []
  data_plants: any = []
  meter_plants: any = []
  //Elem visibility
  show_details : boolean[] = new Array(1000).fill(false)
  //file adress
  data_url = 'https://api.jsonbin.io/v3/b/64189ec7ace6f33a22f2453f'
  //loading obj
  loading : any
  static readonly max_height: number = 100
  constructor(public loadingController : LoadingController) { }

  ngOnInit() {
  }
  async load(){
    console.log("started")
    if (this.data != 0){
      throw new Error("Data was retrieved")
    }
    this.loading = await this.loadingController.create({
      spinner:'circles',
      message: 'Loading...'
    });
    await this.loading.present()
    fetch(this.data_url).then(res => res.json())
      .then(json =>{
        this.data = json
        this.data = this.data.record
        let i = 0
        console.log(this.data[1])
        while(this.data[i] != undefined){
          this.data_plants.push(this.data[i][0])
          i++
        }
        this.getMeterPlants()
        console.log(this.data_plants)
        this.loading.dismiss()
      }
        )
        this.handleClick()
  }
  getMeterPlants(){
    this.meter_plants = []
    for (let i = 0; i < this.data_plants.length; i++) {
      if(this.data_plants[i]["max_height_in_cm"] >= FilePage.max_height ){
        this.meter_plants.push(this.data_plants[i])
      }
    
    }
    console.log(this.meter_plants)
  }
  getColor(a:boolean){
    return a ? 'green' : 'blue';
  }
  getPerennial(a : boolean){
    return a ? 'Багатолітня' : 'Однолітня'
  }
  toggleDetails(i:number){
    if (this.show_details[i]) {
      this.show_details[i] = false
    } else {
      this.show_details[i] = true
    }
    
  }
  handleClick(){
    this.disableButton = true;
  }
}
