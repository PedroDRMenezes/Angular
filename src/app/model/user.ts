import {Adress} from './adress';
import {Company} from './company';


export class User {
    constructor(
        public id:number,
        public name:string,
        public username:string,
        public email:string,
        public address:Adress,
        public phone:string,
        public website:string,
        public company:Company
    ){}
}