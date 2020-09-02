import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from "@angular/common/http";
import {map} from 'rxjs/operators';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  authToken: any;
  user: any;
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }
  registerUser(user){

    let headers = new HttpHeaders();
    headers.append("Content-type","application/json");
    
    return this.http.post("http://localhost:3000/users/register",user,{headers:headers})
    .pipe(map((res: HttpResponse<JSON>) => res));
    
  }
  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    return this.http.post("http://localhost:3000/users/authenticate",user,{headers: headers})
    .pipe(map((res: HttpResponse<JSON>) => res));

  }
  getProfile(){
    
    this.loadToken();
    let headers = new HttpHeaders({"Content-Type":"application/json","Authorization":this.authToken});
  //  headers.append("Authorization",this.authToken);
   // headers.append("Content-Type","application/json");
    console.log("haders : ",this.authToken);
    return this.http.get("http://localhost:3000/users/profile",{headers:headers})
    .pipe(map((res: HttpResponse<JSON>) => res));
  }
  storeUserData(token, user){
    console.log("store : ",token);
    localStorage.setItem("id_token",token);
    localStorage.setItem("user",JSON.stringify(user));
    console.log("user : ",user);
    this.authToken = token;
    this.user = user;
  }
  loadToken(){
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

 logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){

    
  const helper = new JwtHelperService();
  console.log("logged in :",!helper.isTokenExpired(localStorage.id_token));  
    return !helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
    }
   


}
