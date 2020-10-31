import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProfileComponent } from 'src/app/components/profile/profile.component'
import { ART } from 'src/app/model/arts';
@Component({
  selector: 'app-art-tiles',
  templateUrl: './art-tiles.component.html',
  styleUrls: ['./art-tiles.component.css']
})
export class ArtTilesComponent implements OnInit {

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
