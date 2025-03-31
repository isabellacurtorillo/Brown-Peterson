import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  public trigramLetters: string[] = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  public trigram: string = "";

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
  
}
