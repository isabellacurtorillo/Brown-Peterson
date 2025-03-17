import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [ 
  {path: '', component: HomeScreenComponent, 
    children: 
    [  {path: 'instructions', component: InstructionsComponent} ]
  },
  {path: 'about', component: InstructionsComponent}
];

@NgModule({
  imports: 
    [CommonModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
