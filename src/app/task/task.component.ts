import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {

    constructor(private router: Router, private controlPanel: ControlPanelComponent) {
      this.trigram = this.generateRandomTrigram();
      this.trials = this.controlPanel.controlForm.get('trials')?.value;
    }

  public trigramLetters: string[] = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
  public disableLetters: boolean[];
  public trigram: string = "";
  public num1: number;
  public num2: number;
  public formInput: number;
  public showTrigram: boolean;
  public showDist: boolean;
  public showKeys: boolean;
  @Output() public respCount: number;
  public trials: number;

  ngOnInit() {
    
    this.trigram = this.generateRandomTrigram();
    this.showTrigram = false;
    this.showDist = false;
    this.showKeys = false;
    this.disableLetters = [false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false, false, false, false, false ,false]
    this.num1 = this.generateRandomEvenNumber();
    this.num2 = this.generateRandomOddNumber();
    setTimeout(() => {
      this.showTrigram = true;
    }, 4000);
    setTimeout(() => {
      this.showTrigram = false;
    }, 2000);
    setTimeout(() => {
      this.showDist = true;
    }, 7000);
    console.log(this.formInput);
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

  public recordResp(ans: string, pos: number) { //save the response in an array
    console.log(ans);
    this.disableLetters[pos] = true;
    this.respCount = 0;
    for(const element of this.disableLetters) {
      if (element) {
        this.respCount++;
      }
    }
    if(this.respCount == 3) {
      this.router.navigate(['instructions']);
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
  
}
