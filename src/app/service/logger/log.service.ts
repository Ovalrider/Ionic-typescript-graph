import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  write(logmsg:string){
    console.log(logmsg);
  }
}
