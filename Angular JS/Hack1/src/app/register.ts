import { FormBuilder } from '@angular/forms';

export class register
{
    password:string;
    username:string;
    name: string;
    genre:any;
    phone:number;
    address:string;
    oaddress:string;
    noOfPeople:string;
    latitude:string;
    longitude:string;
    
  repeatpassword: any;
    constructor(){
        this.username='';
        this.password='';
        this.name='';
        this.genre=''
        this.repeatpassword='';
    }

    
}