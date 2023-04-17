import { iSay } from "../interface/iSay";

export abstract class Animal implements iSay{
    name?: string
    constructor(n : string = "Animal"){
        this.name=n
    }
    say(): string {
       return "I am a " + this.name;
    }
}