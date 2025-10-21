import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public persons : Person [] = [
    { id: 1, name: 'John Doe', age: 30 , BirthDate: new Date('1993-01-15')},
    { id: 2, name: 'Jane Smith', age: 25 , BirthDate: new Date('1998-05-22')},
    { id: 3, name: 'Alice Johnson', age: 28 , BirthDate: new Date('1995-03-10')},
    { id: 4, name: 'Bob Brown', age: 35 , BirthDate: new Date('1988-07-30')}
  ];
}
