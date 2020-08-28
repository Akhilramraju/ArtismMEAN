import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: String;
password: String;
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  OnLoginSubmit(){
    const user = {
      username : this.username,
      password : this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      console.log("user data :",data);
      if((data as any).success){
        this.authService.storeUserData((data as any).token,(data as any).user);
        this.router.navigate(["profile"]);
        }
        else{
          this.router.navigate(["login"]);
          }
    });
    
    
  }
}
