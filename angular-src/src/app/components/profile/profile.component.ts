import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Object;
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
      console.log("gettinmg user :",(profile as any).user );
      this.user = (profile as any).user;
    }),
    err => {
      console.log(err);
      return false;
    }
  }

}
