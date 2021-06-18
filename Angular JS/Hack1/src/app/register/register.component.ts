import { Component, OnInit } from '@angular/core';
import { FormGroup ,Validators,FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UserDetails } from 'src/app/userdetails';
import { AuthenticationService } from '../authentication.service';
import { RouterserviceService } from '../routerservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checked = false;

  registerform = new FormGroup({

  });
  username = new FormControl;
  password = new FormControl;
  name = new FormControl;
  email = new FormControl;
  phone = new FormControl;
  address = new FormControl;
  latitude = new FormControl;
  longitude = new FormControl;
  genre = new FormControl;
  oaddress = new FormControl;
  noOfPeople = new FormControl;
  checkbox = new FormControl;
  Confirmpassword = new FormControl;

  usercontact1name = new FormControl;
  usercontact1mobileno = new FormControl;
  usercontact1emailaddress = new FormControl;
  usercontact2name = new FormControl;
  usercontact2mobileno = new FormControl;
  usercontact2emailaddress = new FormControl;
  usercontact3name = new FormControl;
  usercontact3mobileno = new FormControl;
  usercontact3emailaddress = new FormControl;

  constructor(private authenticateService :AuthenticationService,private routerService :RouterserviceService)
  {
  }
  
  ngOnInit() {
    if (sessionStorage.getItem('key') != null) {
      alert('You have already logged in');
      // this.routerService.tohome();
    }
    else{
    this.username = new FormControl('', Validators.required),
    this.password = new FormControl('', Validators.required),
    this.name = new FormControl('' , Validators.required),
    this.phone = new FormControl('', Validators.required),
    this.address = new FormControl('', Validators.required),
    this.latitude = new FormControl('', Validators.required),
    this.longitude = new FormControl('', Validators.required),
    this.noOfPeople = new FormControl('', Validators.required),
    this.checkbox = new FormControl(),
    this.Confirmpassword = new FormControl('', Validators.required),
    this.email = new FormControl('', Validators.required)

    this.usercontact1name = new FormControl('', Validators.required);
    this.usercontact1mobileno = new FormControl('',Validators.required);
    this.usercontact1emailaddress = new FormControl('', Validators.required);
    this.usercontact2name = new FormControl('', Validators.required);
    this.usercontact2mobileno = new FormControl('',Validators.required);
    this.usercontact2emailaddress = new FormControl('', Validators.required);
    this.usercontact3name = new FormControl('');
    this.usercontact3mobileno = new FormControl('');
    this.usercontact3emailaddress = new FormControl('');

      this. registerform= new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      name: this.name,
      address: this.address,
      phone: this.phone,
      oaddress: this.oaddress,
      latitude: this.latitude,
      longitude: this.longitude,
      noOfPeople: this.noOfPeople,
      checkbox: this.checkbox,
      Confirmpassword: this.Confirmpassword,
      usercontact1name:this.usercontact1name,
      usercontact1mobileno: this.usercontact1mobileno,
      usercontact1emailaddress:this.usercontact1emailaddress,
      usercontact2name:this.usercontact2name,
      usercontact2mobileno: this.usercontact2mobileno,
      usercontact2emailaddress:this.usercontact2emailaddress,
      usercontact3name:this.usercontact2name,
      usercontact3mobileno: this.usercontact2mobileno,
      usercontact3emailaddress:this.usercontact2emailaddress
    });
  }
  }
  registerSubmit()
  {
    // this.text= "succefuuly registered";
    console.log(this.registerform.value.password);
    if (this.registerform.value.password != this.registerform.value.Confirmpassword) 
    {
      alert('Password not matching');
    }
    let parameter={   
    "firstname":this.registerform.value.username,
    // "lastname":null,
    "lastname": this.registerform.value.username,
    "emailaddress":this.registerform.value.email,
    "noofpeople":this.registerform.value.noOfPeople,
    "mobilenumber":this.registerform.value.phone,
    "loginpassword": this.registerform.value.password,
    "HomelocationLatitude" :this.registerform.value.latitude,
    "HomelocationLongitude" :this.registerform.value.longitude,
    "Residentialaddress" :this.registerform.value.address,
    "Officeaddress" :this.registerform.value.oaddress,
    "Consenttonotification" :this.registerform.value.checkbox,
    "usercontact1name":this.registerform.value.usercontact1name,
    "usercontact1mobileno": this.registerform.value.usercontact1mobileno,
    "usercontact1emailaddress":this.registerform.value.usercontact1emailaddress,
    "usercontact2name":this.registerform.value.usercontact1name,
    "usercontact2mobileno": this.registerform.value.usercontact1mobileno,
    "usercontact2emailaddress":this.registerform.value.usercontact1emailaddress,
    "usercontact3name":this.registerform.value.usercontact1name,
    "usercontact3mobileno": this.registerform.value.usercontact1mobileno,
    "usercontact3emailaddress":this.registerform.value.usercontact1emailaddress
    // "Consenttonotification":"",
    }
    this.authenticateService.addUser(parameter).subscribe((data) => {
      console.log("inside regsiter angular");
      console.log(parameter)
      this.routerService.tologin();
      alert('successfully registerd');
    }
    );
  }
}