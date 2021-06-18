import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { RouterserviceService } from '../routerservice.service';
import { register } from '../register';
import { login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: register = new register();
  reg:register = new register();
  lg:login = new login();

  loginform = new FormGroup({

  });
  username= new FormControl('');
  password = new FormControl('');
  repeatpassword = new FormControl('');
  ssessionusername: string = "";
  submitMessage: string = "";

  obj:any;

  flag:boolean=false;
  constructor(private authservice: AuthenticationService, private routerservice: RouterserviceService,private router: Router) { }
  
  register(){
    this.routerservice.toregister();
  }
  ngOnInit() {
    if (sessionStorage.getItem('key') != null) {
      alert(' You have alreday logged in');
      // this.routerservice.tohome();
    }
    else {
      this.username = new FormControl('', Validators.required),
        this.password = new FormControl('', Validators.required),
        this.repeatpassword=new FormControl('',Validators.required)
        this.loginform = new FormGroup({
        username: this.username,
        password: this.password,
        repeatpassword:this.repeatpassword
      });
    }
  }
  
  loginSubmit() {
    this.routerservice.tohome();

    let parameter={
      "emailaddress": this.loginform.value.username,
      "loginpassword": this.loginform.value.password
    }
    
    this.login.repeatpassword = this.loginform.value.repeatpassword,
    this.submitMessage = this.loginform.value.username;
    console.log("Login Submit: " + this.loginform.value);

    this.authservice.getusers(parameter).subscribe((data) => {
      this.authservice.setBearerToken(data['token']);
      console.log(data);
      if (data != null) {
        sessionStorage.setItem("key",this.submitMessage);
        this.flag=true;
        console.log("succusss");
        alert('succesfully logged in ')
        this.routerservice.tohome();
      }
    },
    // error => {
    //   console.log("error")
    //   alert('You have entered incorrect Username or Password!')
    // }
    );
    }
      
      
}
