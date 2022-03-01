import { RollInterface } from "./rols.interface";

export interface UserInterface{
    id:string;
    name:string;
    age:number;
    rols: RollInterface[];
}