import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProctorInstructionsComponent } from '../proctor-instructions/proctor-instructions.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
    
  public title = 'Brown-Peterson Task';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit() { }

  public onClick() {
    this.router.navigate(['proctor-instructions']);
    console.log('Navigating to instructions proctor instructions '); // Debugging statement
  }
}