import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanel } from '../control-panel.model';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})

export class ControlPanelComponent {

  public controlpanel: ControlPanel;
  public validForm: boolean;
  public dynamicForm: FormGroup;

  public controlForm: FormGroup = new FormGroup({
    trials: new FormControl(undefined, [Validators.required, Validators.min(5)]),
    distractor: new FormControl(undefined, Validators.required),
    distractortwo: new FormControl(undefined, Validators.required),
    distractorthree: new FormControl(undefined, Validators.required)
  });

  constructor(private router: Router){ }

  ngpInit() {

  }

  onSubmit() {
    console.log(this.controlForm);
    this.router.navigate(['instructions']);
    

    if(this.controlForm.value.distractor == this.controlForm.value.distractortwo || this.controlForm.value.distractorThree == this.controlForm.value.distractortwo || this.controlForm.value.distractor == this.controlForm.value.distractorthree){
      console.log("Distractors cannot be the same");
      this.validForm = false;
      return this.controlForm.invalid;
    }

    if(this.controlForm.valid){
      const numberOfTrials = this.controlForm.value.trials;
      const distractorOne = this.controlForm.value.distractor;
      const distractorTwo = this.controlForm.value.distractortwo;
      const distractorThree = this.controlForm.value.distractorthree;
      this.router.navigate(['instructions']);
    }
  }

  setNumberOfTrials(trials: number) {
    for(let i = 0; i < this.controlForm.value.trials; i++){
      console.log("Trial " + i);
    }
  }


}
