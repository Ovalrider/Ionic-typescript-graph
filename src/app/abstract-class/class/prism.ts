export abstract class Prism {
    name! : String
    h!: number
    V! : number
    constructor() {  }
    show(){
        return "Назва = " + this.name + ", Висота біч. поверхні = " + this.h + ", об'єм = " + this.V
    }
    abstract calc_volume() : any
}