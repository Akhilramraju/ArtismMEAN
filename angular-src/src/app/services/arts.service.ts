import { Injectable } from '@angular/core';
import {ART, ARTMEIDA} from 'src/app/model/arts'

@Injectable()
export class ArtService{
    getArts(){
        return ARTS;
    }
    getArtMedia(){
        return ARTSMEDIA;
    }
}

const ARTS: ART[] = 
[
    {
        id: 101,
        artDescription: 'Painter',
        artistId: 101,
        artistName: 'Jack',
        AddedDate:  new Date('9/10/1920'),
   
        artType: 'Painting',
        thumbnail: 'assets/assets/img/Painter/download.jpg',
       cover:'assets/assets/img/Painter/Painter.jpg',
       arts:'assets/assets/img/Painter/Painter.jpg'
    },
    {
        id: 102,
        artDescription: 'Dancer' ,
        artistId: 102,
        artistName: 'Marie',
        AddedDate: new Date('9/11/1920'),
        artType:'Dance',
        thumbnail: 'assets/assets/img/Dancer/download.jpg',
        cover:'assets/assets/img/Dancer/161460.jpg',
       arts:'assets/assets/img/Dancer/161460.jpg'
     
    },
    {
        id: 102,
        artDescription: 'Musician' ,
        artistId: 102,
        artistName: 'Kimble',
        AddedDate: new Date('9/11/1920'),
        artType:'Dance',
        thumbnail: 'assets/assets/img/Musician/images.jpg',
        cover:'assets/assets/img/Musician/download(1).jpg',
       arts:'assets/assets/img//Musician/download(1).jpg'
    },
    {
        id: 102,
        artDescription: 'Magician' ,
        artistId: 102,
        artistName: 'Altran',
        AddedDate: new Date('9/11/1920'),
        artType:'Magician',
        thumbnail: 'assets/assets/img/Magician/images.jpg',
        cover:'assets/assets/img/Magician/images(1).jpg',
       arts:'assets/assets/imgMagician/images(1).jpg'
     
    },
    {
        id: 102,
        artDescription: 'Boxer' ,
        artistId: 102,
        artistName: 'Bently',
        AddedDate: new Date('9/11/1920'),
        artType:'Boxing',
        thumbnail: 'assets/assets/img/Boxer/images.jpg',
        cover:'assets/assets/img/Boxer/download(1).jpg',
       arts:'assets/assets/img/download(1).jpg'
     
    },
    {
        id: 103,
        artDescription: ' Dancer' ,
        artistId: 102,
        artistName: 'Dalian',
        AddedDate: new Date('9/11/1920'),
        artType:'Dance',
        thumbnail: 'assets/assets/img/Dancer/download.jpg',
        cover:'assets/assets/img/Dancer/161460.jpg',
       arts:'assets/assets/img/Dancer/161460.jpg'
     
    }
]

const ARTSMEDIA:ARTMEIDA[] =
    [
        {
            id:1010,
            src:'assets/assets/img/left-arrow.png',
            artid:101
             
        },
        {
                id:1011,
                src:'assets/assets/img/right-arrow.png',
                artid:101
                 
        },
        {
            id:1020,
            src:'assets/assets/img/right-arrow.png',
            artid:101
             
        },
        {
                id:1021,
                src:'assets/assets/img/right-arrow.png',
                artid:101
                 
        }
    
    ]

