import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { UserPrototype } from './user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) users: UserPrototype[] = [];
  @Output() formSubmit = new EventEmitter<UserPrototype>();
  name = signal('');
  age = signal(0);
  profession = signal('');
  address = signal('');

  Onsubmit() {
    console.log(this.name());
    console.log(this.age());
    console.log(this.profession());
    console.log(this.address());

    const newUser: UserPrototype = {
      id: this.users.length + 1,
      name: this.name(),
      age: this.age(),
      profession: this.profession(),
      Address: this.address()
    }

    this.formSubmit.emit(newUser);
  }  
  
  
}
