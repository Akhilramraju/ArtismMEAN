import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arts-component',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css'],

})
export class ArtsComponent implements OnInit {

  constructor() { }
  
  arts: Array<any> = []
  


  ngOnInit(): void {
    this.addArts();
  }

  addArts(){
    this.arts= [{image: 'assets/assets/img/portfolio-details-1.jpg'},
                {image:'assets/assets/img/portfolio-details-2.jpg'},
                {image: 'assets/assets/img/portfolio-details-3.jpg'}
              ]
  }


}
