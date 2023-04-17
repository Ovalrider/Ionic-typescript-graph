import { iRun } from "../interface/iRun";
import { Animal } from "./animal";

export default class HoofedAnimal extends Animal implements iRun{
    constructor(n: string){
        super(n);
    }
    run(){
        return "I am running!";
    }
}