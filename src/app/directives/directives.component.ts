import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 
    public person = 'venu';
    
    private ids: any;

    private heroes: any;

   
   //color: string;
  constructor() { 
         
          this.heroes = ['Venu', 'Ravi', 'Prasad', 'Raju'];
 
          this.ids = [ 1, 2, 5, 8, 11, 13, 14];

  }

  ngOnInit() {

  }

}
