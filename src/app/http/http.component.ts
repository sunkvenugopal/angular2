import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [FirstService]
  
})
export class HttpComponent implements OnInit {

cDetails = [];

 
  constructor(private _firstservice:FirstService) { }

     ngOnInit() {

       this.cDetails = this._firstservice.getDetails();
          
   
  }

}
