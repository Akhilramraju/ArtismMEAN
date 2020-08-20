import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "src/app/model/user";
import { ValidateService } from "src/app/services/validate.service";

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

  constructor(private validateService: ValidateService) { }

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

    //Required Fields
    if(!this.validateService.validateRegister(user)){
      console.log("Fill all the fiends");  
      return false;
    }

    //valudte email fids
    if(!this.validateService.validateEmail(user.email)){

      console.log("Validte emaail",user.email);  
      return false;
    }
    console.log("Registration form submitted! ",this.name);
  }

}
