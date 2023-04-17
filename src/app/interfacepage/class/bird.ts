import { iFly } from "../interface/iFly";
import { iSay } from "../interface/iSay";
import { Animal } from "./animal";

export default class Bird extends Animal implements iFly{
    constructor(n:string){
        super(n);
    }
    fly(){
       return "I am flying!";
    }
}