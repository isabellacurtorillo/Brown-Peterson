import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proctor-instructions',
  templateUrl: './proctor-instructions.component.html',
  styleUrl: './proctor-instructions.component.scss'
})
export class ProctorInstructionsComponent {

  constructor(private router: Router){ }

  public onClick() {
    // Add your navigation logic here
    this.router.navigate(['instructions']);
    console.log('Navigating to proctor instructions...'); // Debugging statement
  }
}
