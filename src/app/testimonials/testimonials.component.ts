 import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people.service';

import { Person } from '../person';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [PeopleService]
})


export class TestimonialsComponent implements OnInit {

   

   person:Person[];

  constructor(private _peopleservice:PeopleService){ }

  ngOnInit() {   

    	this._peopleservice.getPeople().subscribe(person => this.person=person);

  }

  

}


