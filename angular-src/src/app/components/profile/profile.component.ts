import { Component, OnInit, ViewChild,ElementRef, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {Router} from "@angular/router";
import {ART} from 'src/app/model/arts';
import {User} from 'src/app/model/user';
import {AutofillMonitor} from '@angular/cdk/text-field';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap'; 

import {  } from 'rxjs';
import { AddArtComponent } from '../add-art/add-art.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProfileComponent implements OnInit {
  user:User;
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
    private _autofill: AutofillMonitor, public dialog: MatDialog) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  
  
  ngAfterViewInit() {
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddArtComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  
    

}
