import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brown-Peterson Task';
  
  constructor(private readonly router: Router) { }

  public onClick() {
    console.log('Button clicked');
    this.router.navigate(['/instructions']);
  }
}
