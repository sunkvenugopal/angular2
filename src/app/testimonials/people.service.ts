import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Person } from '../person';



@Injectable()

export class PeopleService {

constructor(private http: Http) { }

getPeople() : Observable<Person[]>{

return this.http.get("app/json/sample.json")

.map(response => <Person[]> response.json());

}

}
