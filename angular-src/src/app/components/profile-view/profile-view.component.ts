import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {AutofillMonitor} from '@angular/cdk/text-field';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
      console.log("gettinmg user :",(profile as any).user );
      this.user = (profile as any).user;
      this.addImages();
    }),
    err => {
      console.log(err);
      return false;
    }
  }
  
 image : String[] =[];

 artistTitle: string;
 artistDescription: string;


  addImages(){
    this.image.push("assets/assets/img/portfolio-details-1.jpg");
    this.image.push("assets/assets/img/hero-bg.jpg");
    

  }
  setProfileData(id){
    

  }





  /*
    
 {"assets/assets/img/hero-bg.jpg","assets/assets/img/hero-bg.jpg"}
 ,{"assets/assets/img/portfolio-details-2.jpg"}
 ,{"assets/assets/img/portfolio-details-3.jpg"}
*/
  //[700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private authService:AuthService,  private router:Router, config: NgbCarouselConfig,
    private _autofill: AutofillMonitor) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  user:Object;
  
  
  ngAfterViewInit() {
    
  }
  
    

}
