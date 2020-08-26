import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { ValidateService } from  "./services/validate.service";
import { AuthService } from  "./services/auth.service";
// import { FlashMessagesModule } from "angular2-flash-messages";
import {  } from 'rxjs';

const appRoutes: Routes = [
  {path:"",component: HomeComponent},
  {path:"register",component: RegisterComponent},
  {path:"login",component: LoginComponent},
  {path:"profile",component: ProfileComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
   
    RegisterComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes),
   // FlashMessagesModule
    ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
