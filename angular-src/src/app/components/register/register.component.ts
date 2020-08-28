import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "src/app/model/user";
import { ValidateService } from "src/app/services/validate.service";
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { subscribeOn } from 'rxjs/operators';
import {Router} from "@angular/router";

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
//, private flashMessage:FlashMessagesService
  constructor(
    private validateService: ValidateService, 
    private authService: AuthService, 
    private router: Router) { }

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
      //this.flashMessage.show("Please fill all fields",{cssClass:"alert-danger,timeout:3000"})
      return false;
    }

    //valudte email fids
    if(!this.validateService.validateEmail(user.email)){

     // this.flashMessage.show("Please Enter valid Email",{cssClass:"alert-danger,timeout:3000"})
      return false;
    }
    console.log("Registration form submitted! ",this.name);
    
    // register user
    this.authService.registerUser(user).subscribe(data => {
      if((data as any).success){
      //  this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
      //  this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }


}
