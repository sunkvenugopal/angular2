import { Component, OnInit } from '@angular/core';

import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {

   tDetails = [];

  constructor(private _teamservice:TeamService) { }

  ngOnInit() {

  	this.tDetails = this._teamservice.getTeaminfo();
  }

}
