import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-instructions',
  templateUrl: './participant-instructions.component.html',
  styleUrl: './participant-instructions.component.scss'
})
export class InstructionsComponent {

  public pInstrForm: FormGroup = new FormGroup({
    participantCode: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
  });

  // public invalidCode: boolean;
  // public sPCode: string;
  public participantId: number;
  public task: TaskComponent;

  constructor(private router: Router ) {}

  // public checkQuantityEmpty(q: string) {
  //       if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
  //         this.invalidCode = true;
  //       }else {
  //         this.participantId = parseInt(q);
  //         this.invalidCode = false;
  //       }
  //   }
  
  //   public containsOnlyNumbers(q: string):boolean { return /^\d+$/.test(q); }
  
    public isDisabled():boolean {
      if(this.pInstrForm.valid && this.pInstrForm.value.participantCode.length == 4) {
          return false;
      }
      return true
    }
    
    public onSubmit() {
      console.log(this.pInstrForm);
      this.participantId = this.pInstrForm.value.participantCode;
      this.router.navigate(['task']);
    }
}
