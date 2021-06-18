import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouterserviceService {

  constructor(private router: Router) { }
  tologin(){
    this.router.navigate(['login'])
  }

  tohome(){
    this.router.navigate(['home'])
  }
  
  toregister(){
    this.router.navigate(['register'])
  }
}
