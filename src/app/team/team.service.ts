import {Injectable} from '@angular/core'; 

@Injectable() 

export class TeamService{

  

	getTeaminfo(){
		return [
			{'name':'Pratik'},
			{'name':'Ravi Kumar'},
			{'name':'Venu Gopal'},
			{'name':'prasanth Jha'},
			{'name':'Abilash'},
			{'name':'Rajkumar'},
			{'name':'Suraj'},
			{'name':'Ashley'},
			{'name':'Saurav'}
			
		]
	}

  

	
}