import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})

export class ControlPanelComponent {
  public date: string;
  public sTrialsAmount: string;
  public sDtq1: string;
  public sDtq2: string;
  public sDtq3: string;
  public nQuant: number;
  public nTrialsAmount: number;
  public nDtq1: number;
  public nDtq2: number;
  public nDtq3: number;
  public invalidTrialsAmount: boolean;
  public invalidDtq1: boolean;
  public invalidDtq2: boolean;
  public invalidDtq3: boolean;
  public errorMessage: string = "No";


  constructor(private router: Router ) {
    const now = new Date();
    this.date = now.toLocaleDateString();
    this.invalidTrialsAmount = true;
    this.invalidDtq1 = true;
    this.invalidDtq2 = true;
    this.invalidDtq3 = true;
    console.log(this.date)
   }

  public checkQuantityEmpty(q: string, n: number) {
      switch (n) {
          case 1: 
            if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
              this.invalidTrialsAmount = true;
            }
            else {
              this.nQuant = parseInt(q);
              if(this.nQuant <= 2) {
                this.invalidTrialsAmount = true;
                console.log(this.errorMessage);
                return;
              }
              this.nTrialsAmount = this.nQuant;
              this.invalidTrialsAmount = false;
            }
              break;
          case 2: 
            if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
              this.invalidDtq1 = true;
            }
            else {
              this.nQuant = parseInt(q);
              if(this.nQuant <= 2 || this.nQuant == this.nDtq2 || this.nQuant == this.nDtq3) {
                this.invalidDtq1 = true;
                console.log(this.errorMessage);
                return;
              }
              this.nDtq1 = this.nQuant;
              this.invalidDtq1 = false;
            }
              break;
          case 3:
            if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
              this.invalidDtq2 = true;
            }
            else {
              this.nQuant = parseInt(q);
              if(this.nQuant <= 2 || this.nDtq1 == this.nQuant || this.nQuant == this.nDtq3 ) {
                this.invalidDtq2 = true;
                console.log(this.errorMessage);
                return;
              }
              this.nDtq2 = this.nQuant;
              this.invalidDtq2 = false;
            }
              break;
          case 4:
            if(q.length == 0 || this.containsOnlyNumbers(q) == false) {
              this.invalidDtq3 = true;
            }
            else {
              this.nQuant = parseInt(q);
              if(this.nQuant <= 2 || this.nQuant == this.nDtq2 || this.nQuant == this.nDtq1) {
                this.invalidDtq3 = true;
                console.log(this.errorMessage);
                return;
              }
              this.nDtq3 = this.nQuant;
              this.invalidDtq3 = false;
            }
              break;
        }
  }

  public containsOnlyNumbers(q: string):boolean { return /^\d+$/.test(q); }

  public isDisabled():boolean {
    if(this.invalidTrialsAmount == false && this.invalidDtq1 == false && this.invalidDtq2 == false && this.invalidDtq3 == false) {
      return false;
    }
    return true;
  }
  
  public onSubmit() {
    console.log(this.nTrialsAmount + " " + this.nDtq1 + " " + this.nDtq2 + " " + this.nDtq3);
  }

  

}



