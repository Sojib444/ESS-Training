import { Component, input } from '@angular/core';

@Component({
  selector: 'app-success-message',
  imports: [],
  templateUrl: './success-message.html',
  styleUrl: './success-message.css'
})
export class SuccessMessage {
  message = input<string>('Operation completed successfully');
}
