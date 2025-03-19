import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
    
  title = 'Brown-Peterson Task';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit() { }

  public onClick() {
    this.router.navigate(['instructions']);
    console.log('Navigating to instructions...'); // Debugging statement
  }
}