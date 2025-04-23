import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanelComponent } from '../control-panel/control-panel.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  public trigramLetters: string[] = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
  public trigram: string = "";
  public num1: number;
  public num2: number;
  public formInput: number;
  public showTrigram: boolean;
  public showDist: boolean;
  public showKeys: boolean;
  public showInstr: boolean;
  public showExport: boolean;
  @Output() public respCount: number;
  public userResponse: string;
  public userResponses: string[] = new Array(this.controlPanel.controlForm.value.trials).fill("");
  @Input() public randDistOrder: number[] = [];
  @Input() public randTriOrder: string[] = [];
  @Input() public numPart: number;
  public counter: number;

  public pInstrForm: FormGroup = new FormGroup({
    participantCode: new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
  });

    constructor(private router: Router, private controlPanel: ControlPanelComponent) {
      this.showTrigram = false;
      this.showDist = false;
      this.showKeys = false;
      this.showInstr = false;
      this.showExport = false;
      this.num1 = this.generateRandomEvenNumber();
      this.num2 = this.generateRandomOddNumber();
      this.start();
    }

  public start() {
    this.pInstrForm.reset();
    this.numPart--
    this.showInstr = true;
  }

  public exportData() {
    console.log(this.numPart);
    this.showExport = false;
    this.start();
  }

  public swapQuantities(n: number) {
    if( n % 2 == 0 && this.formInput-1 != 0) {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        this.num1 = this.generateRandomOddNumber();
        this.num2 = this.generateRandomEvenNumber();
      }else if(randomNumber >= 0.5){
        this.num1 = this.generateRandomEvenNumber();
        this.num2 = this.generateRandomOddNumber();
      }
      this.formInput--;
    }else {
      if(n % 2 != 0) {
        return;
      }else if(n % 2 == 0 && this.formInput-1 == 0) {
        this.showDist = false;
        this.showKeys = true;
      }
      return;
    }
  }

  public recordResp(ans: string) { //save the response in an array
    console.log(ans);
    this.respCount++;
    if(this.respCount == 3) {
      this.showKeys = false;
      if(this.counter < (this.randDistOrder.length-1)) {
        this.counter++;
        this.doTrial(this.counter);
      }else {
        this.showExport = true;
      }
    }
  }

  public generateRandomTrigram() {
    this.trigram = "";
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * this.trigramLetters.length);
      this.trigram += this.trigramLetters[randomIndex];
    }
    return this.trigram;
  }

  public getTrigram() {
    return this.trigram;
  }

  public generateRandomOddNumber(){
    let randomOddNumber = Math.floor(Math.random() * 10) * 2 + 1;
    return randomOddNumber;
  }

  public generateRandomEvenNumber(){
    let randomEvenNumber = Math.floor(Math.random() * 10) * 2;
    return randomEvenNumber;
  }

  public distractorDifficulty(formInput: number){
      for(let i=0; i<formInput; i++){
        let randomOddNumber = this.generateRandomOddNumber();
        let randomEvenNumber = this.generateRandomEvenNumber();
        //display one random number and one random odd number for the number of times the formInput outlines
        console.log("Random Odd Number: " + randomOddNumber);
        console.log("Random Even Number: " + randomEvenNumber);
        
      }

  }

  public isDisabled():boolean {
    if(this.pInstrForm.valid && this.pInstrForm.value.participantCode.length == 4) {
        return false;
    }
    return true
  }
  
  public onSubmit() {
    this.showInstr = false;
    this.showExport = false;
    this.counter = 0;
    this.doTrial(this.counter);
  }
  
  public doTrial(i: number) {
      this.respCount = 0;
      this.trigram = this.randTriOrder[i];
      this.formInput = this.randDistOrder[i];
      setTimeout(() => {
        this.showTrigram = true;
      }, 4000);
      setTimeout(() => {
        this.showTrigram = false;
      }, 2000);
      setTimeout(() => {
        this.showDist = true;
      }, 7000);
  }
}
