import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brown-Peterson Task';
  
  constructor(private route: Router) { }

  navigateToInstructions() {
    // Add your navigation logic here
    this.route.navigate(['/instructions']);
    console.log('Navigating to instructions');
  }
}
