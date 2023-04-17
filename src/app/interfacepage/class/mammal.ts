import { iFeed } from "../interface/iFeed";
import { iRun } from "../interface/iRun";
import { Animal } from "./animal";

export default class Mammal extends Animal implements iFeed, iRun{
    constructor(n:string){
        super(n);
    }
    feed():string{
        return"I am feeding!"
    }
    run():string {
        return"I am running!"
    }
}