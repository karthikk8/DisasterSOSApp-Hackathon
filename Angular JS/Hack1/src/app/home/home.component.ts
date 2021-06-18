import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: boolean =false;
  
  constructor(private http: HttpClient,private routerService :RouterserviceService) { }
  
  login(){
    this.routerService.tologin();
    alert("You have been succeffully logged out")
  }
  ngOnInit(): void {
  }
  getWeather(){
    this.items= true;
  }
}
