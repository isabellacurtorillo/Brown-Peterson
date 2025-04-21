import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-handler',
  templateUrl: './data-handler.component.html',
  styleUrl: './data-handler.component.scss'
})
export class DataHandlerComponent {
  
  @Input() trigram: string = ""; // The trigram to process
    @Input() userResponse: string = ""; // The user's response to the trigram
  
    processResponse(): void {
      console.log(`Processing response...`);
      console.log(`Trigram: ${this.trigram}`);
      console.log(`User Response: ${this.userResponse}`);
      // Add logic to compare the trigram and user response or save the data
    }
  }
