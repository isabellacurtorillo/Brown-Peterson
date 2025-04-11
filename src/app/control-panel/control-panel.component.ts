import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { InstructionsComponent } from '../participant-instructions/participant-instructions.component';
import { ControlPanel } from '../control-panel.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// class trials {
//   public allTrials: trial[] = [];
//   public triTask: TaskComponent;
//   public iTrial: trial;

//   constructor(tnt: number) {
//     this.triTask = new TaskComponent;
//       for(let i = 0; i < tnt; i++) {
//         this.iTrial = new trial(i+1);
//         this.allTrials.push(this.iTrial);
//         this.allTrials[i].randTrigram = this.triTask.generateRandomTrigram();
//         console.log(this.allTrials[i].randTrigram + " " + this.allTrials[i].trialNum);
//       }
//   }
// }
// //add form for inputs 

// class trial {
//   public trialNum: number;
//   public randTrigram: string;
//   public pi: InstructionsComponent;

//   constructor(tn: number) {
//     this.trialNum = tn;
//     this.randTrigram = "";
//     this.pi = null;
//   }
// }

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})

export class ControlPanelComponent {

  public controlpanel: ControlPanel;

  public controlForm: FormGroup = new FormGroup({
    trials: new FormControl(undefined, Validators.required),
    distractor: new FormControl(undefined, Validators.required),
    distractortwo: new FormControl(undefined, Validators.required),
    distractorthree: new FormControl(undefined, Validators.required)
  });

  constructor(private router: Router){ }

  ngpInit() {

  }

  onSubmit() {
    console.log(this.controlForm);
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
//   constructor(private router: Router ) {
//     // const now = new Date();
//     // this.controlpanel.date = now.toLocaleDateString();
//     // this.controlpanelinvalidTrialsAmount = true;
//     // this.invalidDtq1 = true;
//     // this.invalidDtq2 = true;
//     // this.invalidDtq3 = true;
//     // console.log(this.date)
//    }

//   ngonInit() {
//     this.controlForm.formGroup({
//       sTrialsAmount: '',
//       sDtq1: '',
//       sDtq2: '',
//   });
// }
//   public checkQuantityEmpty(q: string, n: number) {
//       switch (n) {
//           case 1: 
//             if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
//               this.controlpanel.invalidTrialsAmount = true;
//             }
//             else {
//               this.controlpanel.nQuant = parseInt(q);
//               if(this.controlpanel.nQuant <= 2) {
//                 this.controlpanel.invalidTrialsAmount = true;
//                 console.log(this.controlpanel.errorMessage);
//               }else {
//                 this.controlpanel.nTrialsAmount = this.controlpanel.nQuant;
//                 this.controlpanel.invalidTrialsAmount = false;
//               }
//             }
//               break;
//           case 2: 
//             if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
//               this.controlpanel.invalidDtq1 = true;
//             }
//             else {
//               this.nQuant = parseInt(q);
//               if(this.nQuant <= 2 || this.nQuant == this.nDtq2 || this.nQuant == this.nDtq3) {
//                 this.invalidDtq1 = true;
//                 console.log(this.errorMessage);
//               }else {
//                 this.nDtq1 = this.nQuant;
//                 this.invalidDtq1 = false;
//               }
//             }
//               break;
//           case 3:
//             if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
//               this.invalidDtq2 = true;
//             }
//             else {
//               this.nQuant = parseInt(q);
//               if(this.nQuant <= 2 || this.nDtq1 == this.nQuant || this.nQuant == this.nDtq3 ) {
//                 this.invalidDtq2 = true;
//                 console.log(this.errorMessage);
//               }else {
//                 this.nDtq2 = this.nQuant;
//                 this.invalidDtq2 = false;
//               }
//             }
//               break;
//           case 4:
//             if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
//               this.invalidDtq3 = true;
//             }
//             else {
//               this.nQuant = parseInt(q);
//               if(this.nQuant <= 2 || this.nQuant == this.nDtq2 || this.nQuant == this.nDtq1) {
//                 this.invalidDtq3 = true;
//                 console.log(this.errorMessage);
//               }else {
//                 this.nDtq3 = this.nQuant;
//                 this.invalidDtq3 = false;
//               }
//             }
//               break;
//         }
//   }

//   public containsOnlyNumbers(q: string):boolean { return /^\d+$/.test(q); }

//   public isDisabled():boolean {
//     if(this.invalidTrialsAmount == false && this.invalidDtq1 == false && this.invalidDtq2 == false && this.invalidDtq3 == false) {
//       return false;
//     }
//     return true;
//   }
  
//   public onSubmit() {
//     console.log(this.nTrialsAmount + " " + this.nDtq1 + " " + this.nDtq2 + " " + this.nDtq3);
//     const tt = new trials(this.nTrialsAmount);
//     tt.allTrials[0].pi = new InstructionsComponent(this.router);
//   }

// }



