import { Component, OnInit,trigger,
    state,
    style,
    transition,
    animate,
    keyframes } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [

        trigger('focusPanel', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: '#eee'
            })),
            state('active', style({
                transform: 'scale(1.1)',
                backgroundColor: '#cfd8dc'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),

    ]
})
export class AboutComponent implements OnInit {

state: string = 'inactive';

    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  constructor() { }

  ngOnInit() {
  }

}

