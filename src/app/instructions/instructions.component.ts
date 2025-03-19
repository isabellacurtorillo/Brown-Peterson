import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent {

  constructor(private router: Router ) { }

  public onClick() {
    this.router.navigate(['task']);
    console.log('Navigating to task...'); // Debugging statement
  }
}
