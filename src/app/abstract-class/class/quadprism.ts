import { Prism } from "./prism";

export class QuadPrism extends Prism{
    a! : number
    constructor(override name:string, override h:number,  a:number){
        super()
        this.a = a
    }
    override calc_volume() {
        this.V = this.a * this.a * this.h
    }
}