import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
  constructor(private router: Router ) { }

  public onClick() {
    this.router.navigate(['instructions']);
    console.log('Navigating to task...'); // Debugging statement
  }
}
