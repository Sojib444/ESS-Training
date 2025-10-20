import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Section-1-2.1');

  public Users = [
    {
      id: 1,
      name: 'Sojib', 
      age: 24,
      profession: 'Software Engineer',
      Address: "Pabna",
      avater: "userPhoto1.jpg"
    },
    {
      id: 2,
      name: 'Karim',
      age: 34,
      profession: 'Accountance',
      Address: "Dhaka",
      avater: "userPhoto2.jpg"
    },
    {
      id: 3,
      name: 'Rahim',
      age: 40,
      profession: 'QA Engineer',
      Address: "Chittagong",
      avater: "userPhoto3.jpg"
    },
    {
      id: 4,
      name: 'Sampa',
      age: 22,
      profession: 'Software Engineer',
      Address: "Naokhali",
      avater: "userPhoto4.jpg"
    },
    {
      id: 5,
      name: 'Fuad',
      age: 25,
      profession: 'Software Engineer',
      Address: "Kishoreganj",
      avater: "userPhoto5.jpg"
    }
  ];

  ReceiveUserData($event: any){
    this.Users.push($event);
    console.log(this.Users);
  }
}
