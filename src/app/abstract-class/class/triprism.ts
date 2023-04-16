import { Prism } from "./prism";

export class TriPrism extends Prism{
    S! :number
    constructor(override name:string, override h:number,  S:number){
        super()
        this.S = S
    }
    override calc_volume() {
        this.V = this.S * this.h
    }
}