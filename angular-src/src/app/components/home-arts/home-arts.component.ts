import { Component, OnInit, OnChanges } from '@angular/core';
import { ArtService } from 'src/app/services/arts.service';
import { ART } from 'src/app/model/arts';

@Component({
  selector: 'app-home-arts',
  templateUrl: './home-arts.component.html',
  styleUrls: ['./home-arts.component.css']
})
export class HomeArtsComponent implements OnInit, OnChanges {

  constructor(private artService:ArtService) { }
  arts: any[]
  filterBy: string = 'artist';
  filterByArtist: string;
  sortBy: String = 'artist';
  visibleRow = 3;
 

  no_tiles: Number;
  numbers: Number[];
  visibleArts: any[];
  
  ngOnInit(): void {
    this.arts = this.artService.getArts();
    this.visibleArts=this.arts;
    this.no_tiles = this.arts.length;

    this.assignTiles();
    this.numbers = Array(this.no_tiles).fill(this.no_tiles).map((x,i)=>i);
    console.log("number", this.numbers)
  }
  ngOnChanges(){
    if(this.arts){
      this.filterArts(this.filterBy);
      this.sortBy==='name' ?this.visibleArts.sort(sortByArtistAsc):
                     'date' ? this.visibleArts.sort(sortByDateAsc) :
                     this.visibleArts.sort(sortByArtTypes);
    }
  }
  filteringBy(filterByArtist){
    console.log("filteringBy",filterByArtist)

  }
  filterArts(filter)
  {
    if(filter==="artist"){
      this.visibleArts = this.arts.slice(0);
    }
    else{
      this.visibleArts = this.arts;
    }
  }
  assignTiles(){
    this.no_tiles = 10;
  }
  followTheArtist(data)
  {
    // call model service to follow artist
    console.log("artist id obtained:",data)
  }
  getThis(takeThis){
    console.log("got :",takeThis)
  }
}

function sortByArtistAsc(a1: ART, a2: ART){
  if(a1.artistName > a2.artistName)
  {

  }
  return null;
}
function sortByDateAsc(a1: ART, a2: ART){
  if(a1.AddedDate > a2.AddedDate){}
  return null;

}
function sortByArtTypes(a1: ART, a2: ART){
  if(a1.artType > a2.artType){}
  return null;
}