
import { CommonModule } from '@angular/common';  
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import {ArtsComponent} from './components/Arts/arts.component'
import { HomeComponent } from './components/home/home.component';
import { JwtModule,JwtModuleOptions  } from '@auth0/angular-jwt';
import { RouterModule,Routes } from '@angular/router';
import { ValidateService } from  "./services/validate.service";
import { AuthService } from  "./services/auth.service";
import {AuthGuard} from "../app/guards/auth.guard";
import {AutofillMonitor} from "@angular/cdk/text-field";
// import { FlashMessagesModule } from "angular2-flash-messages";
import {  } from 'rxjs';
import { tokenName } from '@angular/compiler';
import { HomeArtsComponent } from './components/home-arts/home-arts.component';
import { ArtTilesComponent } from './components/art-tiles/art-tiles.component';
import { ArtService } from './services/arts.service';
import { ProfileArtComponent } from './components/profile-art/profile-art.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { AddArtComponent } from './components/add-art/add-art.component';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    
  }
};

const appRoutes: Routes = [
  {path:"",component: HomeComponent},
  {path:"register",component: RegisterComponent},
  {path:"login",component: LoginComponent},
  {path:"profile",component: ProfileComponent,canActivate:[AuthGuard]},
  {path:"artsHome",component:HomeArtsComponent},
  {path:"editProfile",component:EditProfileComponent},
  {path:"viewProfile",component:ProfileViewComponent, canActivate:[AuthGuard]}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
   ArtsComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    HomeArtsComponent,
    ArtTilesComponent,
    ProfileArtComponent,
    EditProfileComponent,
    FooterComponent,
    ProfileViewComponent,
    AddArtComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule, JwtModule.forRoot(JWT_Module_Options),
    Ng2CarouselamosModule,

    RouterModule.forRoot(appRoutes),
   // FlashMessagesModule
    ],
  providers: [ValidateService,AuthService,AuthGuard,NgbCarouselConfig,ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
