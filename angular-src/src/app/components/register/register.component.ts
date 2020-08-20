import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name: String;
usermname:String;
email:String;
password:string;
  constructor() { }

  ngOnInit(): void {
  }

}
