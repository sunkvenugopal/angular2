import { Component, OnInit, NgModule } from '@angular/core';
import { DepPipePipe } from '../dep-pipe.pipe';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

	private details:any;
	
	
  constructor() { 

  	this.details = [
       
                        {name:'Ravi', designation:'Senior Dot Net Developer'},
        
                        {name:'Prasad', designation:'Hardware Engineer'},
        
                        {name:'Raju', designation:'Finance Analyst'},
       
                        {name:'venu', designation:'Ui Developer'},
        
                        {name:'Ramesh', designation:'Reporting Manager'},
         
                        {name:'Suresh', designation:'Sales Force Developer'},

                        {name: 'Kumar', designation:'Chemical Engineer'},

                        {name: 'Harish', designation:'Probationary Officer'},

                        {name: 'Shankar', designation:'Business Analyst'}
   ]
 


  }

  ngOnInit() {
  }

}




@NgModule({
    declarations: [
        DepPipePipe
    ]
})

  export class AppModule { }
