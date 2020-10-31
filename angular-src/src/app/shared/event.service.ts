import { Injectable } from '@angular/core';

@Injectable()
export class EventService{
    getArts(){
        return ARTS;
    }
}

const ARTS = 
[
    {
        id: 101,
        artDescription: 'regular',
        artistId: 101,
        artistName: 'Jack',
        Date: '9/10/1920',
        Time: '10:00 am',
        artMediaId: 101,
        thumbnail: 'assets/assets/img/left-arrow.png',
         artMedia:
    [
        {
            id:101,
            src:'assets/assets/img/left-arrow.png'
             
        },
        {
                id:102,
                src:'assets/assets/img/right-arrow.png'
                 
        }
    
    ]
    }
]
