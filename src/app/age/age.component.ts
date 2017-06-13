import { Component, OnInit,  NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  private people:any;
  slider = 20;
  
  constructor() { 
   this.people = [
   {
   	  name: 'Ravi Kiran',
   	  age: 100
   }, {
      name: 'Justin Bieber',
      age: 90
    }, {
      name: 'Miley Cyrus',
      age: 80
    }, {
      name: 'John Legend',
      age: 70
    }, {
      name: 'Betty White',
      age: 60
    }, {
      name: 'Roger Waters',
      age: 50
    }, {
      name: 'Larry Page',
      age: 40
    }, {
    	name: 'Vamsi Kumar',
    	age: 30
    }, {
       name: 'Harish',
       age: 20
    } ,{
       name: 'Prasad Rao',
       age: 10
    }
    ];
  }

  ngOnInit() {
  }

}


@NgModule({
    declarations: [
        FilterPipe,
    ]
})
export class AppModule { }