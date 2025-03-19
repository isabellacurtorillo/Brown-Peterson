import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TaskComponent } from './task/task.component';

const appRoutes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'task', component: TaskComponent}
];

@NgModule({
  imports: 
    [CommonModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
