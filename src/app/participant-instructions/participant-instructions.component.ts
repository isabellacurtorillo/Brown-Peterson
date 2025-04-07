import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './participant-instructions.component.html',
  styleUrl: './participant-instructions.component.scss'
})
export class InstructionsComponent {

  public invalidCode: boolean;
  public sPCode: string;
  public participantId: number;

  constructor(private router: Router ) { 
    this.invalidCode = true;
    this.participantId = 0;
    this.router.navigate(['instructions']);
  }

  public checkQuantityEmpty(q: string) {
        if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
          this.invalidCode = true;
        }else {
          this.participantId = parseInt(q);
          this.invalidCode = false;
        }
    }
  
    public containsOnlyNumbers(q: string):boolean { return /^\d+$/.test(q); }
  
    public isDisabled():boolean {
      if(this.invalidCode == false) {
        return false;
      }
      return true;
    }
    
    public onSubmit() {
      console
    }
}
