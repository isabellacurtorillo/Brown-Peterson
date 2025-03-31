import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proctor-instructions',
  templateUrl: './proctor-instructions.component.html',
  styleUrl: './proctor-instructions.component.scss'
})
export class ProctorInstructionsComponent {
  constructor(private router: Router){}

  public onClick() {
    this.router.navigate(['controls']);
    console.log('Navigating to control panel..'); // Debugging statement
  }
}
