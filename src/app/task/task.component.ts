import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  constructor() { }

  public trigramLetters: string[] = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  public trigram: string = "";
  public formInput: number;

  public generateRandomTrigram(trigram: string[]) {
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
