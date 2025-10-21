import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { PersonService } from '../service/person-service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-personlist',
  imports: [DatePipe],
  templateUrl: './personlist.html',
  styleUrl: './personlist.css'
})
export class Personlist {
  public persons: Person[] = [];

  constructor(public personService: PersonService) {
    this.persons = this.personService.persons;
  }

  onChange()
  {
    this.persons[0].name = 'Changed Name';
  }
}
