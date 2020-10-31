import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-art',
  templateUrl: './profile-art.component.html',
  styleUrls: ['./profile-art.component.css']
})
export class ProfileArtComponent implements OnInit {

  constructor() { }



  @Input() art: any;
  @Output() artistFollowed = new EventEmitter();
  @Output() sendThis = new EventEmitter();
  no_tiles: Number;
  numbers: Number[];

   
  
  ngOnInit(): void {
    
    this.assignTiles();
    this.numbers = Array(this.no_tiles).fill(this.no_tiles).map((x,i)=>i);
    console.log("number", this.numbers)
    console.log("input com :",this.art) 
  }
  assignTiles(){
    this.no_tiles = 10;
    
  }
  followArtist(){
    console.log("Following user!",this.art.artistId)

    this.artistFollowed.emit(this.art.artistId)
  }
  eventClicked()
  {
    console.log("Event clicked")
    this.sendThis.emit("something")
  }


}
