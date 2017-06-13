import { Component, OnInit } from '@angular/core';
import { Hero } from './forms-data.component';

@Component({
  moduleId: module.id,
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    newHero() {
    this.model = new Hero(42, '', '');
    } 
    constructor(){}

    ngOnInit(){}
    }

