import {Injectable} from '@angular/core'; 

@Injectable() 

export class FirstService{

  

	getDetails(){
		return [
			{'name':'Praveen Kumar','designation':'Chemistry Lecturer','age':32},
			{'name':'kiran','designation':'ux','age':26},
			{'name':'Venu Gopal','designation':'Senior Software Engineer','age':27},
			{'name':'Sri Krishna','designation':'Senior Chemical Engineer','age':28},
			{'name':'Ravi Kumar', 'designation': 'Data Entry Operator', 'age' : 31},
			{'name':'Prasad Rao','designation':'Tally Operator','age':36},
			{'name':'Ramesh Rao','designation':'Zonal Officer','age':45}
			
		]
	}

  

	
}