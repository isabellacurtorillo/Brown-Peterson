import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanel } from '../control-panel.model';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})

export class ControlPanelComponent {

  public controlpanel: ControlPanel;
  // public dynamicForm: FormGroup;
  public task: TaskComponent;

  public controlForm: FormGroup = new FormGroup({
    trials: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(3)]),
    distractor: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    distractortwo: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    distractorthree: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    numPart: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)])
  });

  constructor(private router: Router, private fb: FormBuilder) {
    // this.dynamicForm = this.fb.group({
    //   bulkRuns: this.fb.array([])
    // });
  }



  // public get bulkRuns(): FormArray {
  //   return this.dynamicForm.get('bulkRuns') as FormArray;
  // }


  // public addParticipants() {
  //   this.bulkRuns.push(this.fb.group({
  //     code: []
  //   }));
  //   console.log(this.dynamicForm);
  // }

  // public removeBulkRun(index: number) {
  //   this.bulkRuns.removeAt(index);
  // }

  ngpInit() {

  }

  onSubmit() {
    console.log(this.controlForm);
    // console.log(this.dynamicForm);
    if(this.controlForm.valid){
        this.router.navigate(['instructions']);
    }
  }

  setNumberOfTrials(trials: number) {
    for(let i = 0; i < this.controlForm.value.trials; i++){
      console.log("Trial " + i);
    }
  }


}
