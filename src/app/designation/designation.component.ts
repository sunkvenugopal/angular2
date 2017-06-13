import { Component, OnInit, NgModule } from '@angular/core';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { BrowserModule  } from '@angular/platform-browser';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

	private designations:any;  
	//order: string = 'age';
	//order:string;
  

  constructor() { 

                   this.designations = [ { "name": "Adam", "number": "555-5678", "age": 35, "designation": "Technician" }, 
                                         { "name": "John", "number": "555-1212", "age": 10, "designation": "Electrical Engineer" }, 
                                         { "name": "Julie", "number": "555-8765", "age": 29, "designation": "Senior Software Engineer" }, 
                                         { "name": "Mary", "number": "555-9876", "age": 19, "designation": "Business Analyst" }, 
                                         { "name": "Mike", "number": "555-4321", "age": 21, "designation": "General Manager" },
                                         { "name": "Kiran", "number": "555-0000", "age": 5, "designation": "Team Lead" }]

  }

  ngOnInit() {
  }

}


@NgModule({
  imports: [BrowserModule, Ng2OrderModule]
  
})
export class AppModule {}