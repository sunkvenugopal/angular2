import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

	 private shown: string = 'About';

	 msg1 = 'Hello World';	

	 isValid = true;

	 msg2 = '';	 

	 msg3 = '';


	 changeText(mytext:string) {
      
	   this.msg3 = mytext;

        }	

        msg = "";

        nCnt: number = 0;

  clickMe() {
      this.nCnt = this.nCnt + 1;
      this.msg = "The click count is " + this.nCnt;
  }

  constructor() {
   }

  ngOnInit() {
  }

}