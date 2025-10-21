import { Component, signal } from '@angular/core';
import { Personlist } from "./person/personlist/personlist";

@Component({
  selector: 'app-root',
  imports: [Personlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Section2_17');
}
