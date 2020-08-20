import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "src/app/model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
forms : FormGroup;

 name: String;
 username:String;
 email:String;
 password:string;

  constructor() { }

  ngOnInit(): void {
  }
  OnRegisterSubmit()
  {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password



    }
    console.log("Registration form submitted! ",this.name);
  }

}
