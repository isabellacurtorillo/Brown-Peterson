import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanel } from '../control-panel.model';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})

export class ControlPanelComponent implements OnInit {

  public controlpanel: ControlPanel;
  // public dynamicForm: FormGroup;
  public task: TaskComponent;
  public showTask: boolean;
  public showInstructions: boolean;
  public distOneCount: number;
  public distTwoCount: number;
  public distThreeCount: number;
  public numPart: number;
  public randDistOrder: number[] = [];
  public randTriOrder: string[] = [];

  public controlForm: FormGroup = new FormGroup({
    trials: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(3)]),
    distractor: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    distractortwo: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    distractorthree: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2)]),
    numPart: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1)])
  });

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.showTask = false;
    this.showInstructions = true;
  }

  onSubmit() {
    console.log(this.controlForm);
    // console.log(this.dynamicForm);
    if(this.controlForm.valid){
        this.showInstructions = false;
        this.setCounters();
        this.randDistOrder = this.getRandDistOrder();
        this.randTriOrder = this.getRandTri();
        this.numPart = this.controlForm.value.numPart;
        console.log(this.randTriOrder);
        console.log(this.randDistOrder);
        this.showTask = true;

    }
  }

  getRandTri(): string[] {
    var order: string[] = new Array(this.controlForm.value.trials).fill(null);
    for(let i = 0; i < this.controlForm.value.trials; i++) {
      var controlpanel = new ControlPanelComponent(this.router);
      this.task = new TaskComponent(this.router, controlpanel);
      var randTri = this.task.generateRandomTrigram();
      order[i] = randTri;
    }
    return order;
  }

  getRandDistOrder(): number[] {
    const choices: number[] = [this.controlForm.value.distractor, this.controlForm.value.distractortwo, this.controlForm.value.distractorthree];
    var order: number[] = new Array(this.controlForm.value.trials).fill(null);
    for(let i = 0; i < this.controlForm.value.trials; i++) {
      var randomIndex = Math.floor(Math.random() * choices.length);
      order[i] = choices[randomIndex];
      if(order[i] == choices[0] && this.distOneCount != 0) {
        this.distOneCount--;
      }else if(order[i] == choices[1] && this.distTwoCount != 0) {
        this.distTwoCount--;
      }else if(order[i] == choices[2] && this.distThreeCount != 0) {
        this.distThreeCount--;
      }else if(order[i] == choices[0] && this.distOneCount == 0 && this.distThreeCount != 0) {
        order[i] = choices[2];
        this.distThreeCount--;
      }else if(order[i] == choices[0] && this.distOneCount == 0 && this.distTwoCount != 0) {
        order[i] = choices[1];
        this.distTwoCount--;
      }else if(order[i] == choices[1] && this.distTwoCount == 0 && this.distOneCount != 0) {
        order[i] = choices[0];
        this.distOneCount--;
      }else if(order[i] == choices[1] && this.distTwoCount == 0 && this.distThreeCount != 0) {
        order[i] = choices[2];
        this.distThreeCount--;
      }else if(order[i] == choices[2] && this.distThreeCount == 0 && this.distOneCount != 0) {
        order[i] = choices[0];
        this.distOneCount--;
      }else if(order[i] == choices[2] && this.distThreeCount == 0 && this.distTwoCount != 0) {
        order[i] = choices[1];
        this.distTwoCount--;
      }
    }
    return order;
  }

  setCounters() {
    const total = this.controlForm.value.trials;
    if(total % 3 == 0) {
      this.distOneCount = Math.floor(total / 3);
      this.distTwoCount = Math.floor(total / 3);
      this.distThreeCount = Math.floor(total / 3);
    }else if(total % 3 == 1) {
      this.distOneCount = Math.floor(total / 3);
      this.distTwoCount = Math.floor(total / 3);
      this.distThreeCount = this.distOneCount + 1;
    }else if(total % 3 == 2) {
      this.distOneCount = Math.floor(total / 3);
      this.distTwoCount = this.distOneCount + 1;
      this.distThreeCount = this.distOneCount + 1;
    }
  }

  setNumberOfTrials(trials: number) {
    for(let i = 0; i < this.controlForm.value.trials; i++){
      console.log("Trial " + i);
    }
  }

  isDisabled():boolean {
    if(this.controlForm.valid) {
      if((this.controlForm.value.numPart >= 1) && (this.controlForm.value.distractor !== this.controlForm.value.distractortwo) && (this.controlForm.value.distractor !== this.controlForm.value.distractorthree) && (this.controlForm.value.distractortwo !== this.controlForm.value.distractorthree)) {
        return false;
      }
    }
    return true;
  }
}
