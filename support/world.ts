import {setWorldConstructor} from "cucumber";

export class World{
    public driver: any;

    constructor(){
        this.driver = null;
    }
}

setWorldConstructor(World);