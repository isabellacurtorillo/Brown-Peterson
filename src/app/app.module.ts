import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MatIconModule } from '@angular/material/icon';
import { InstructionsComponent } from './participant-instructions/participant-instructions.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { TaskComponent } from './task/task.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ProctorInstructionsComponent } from './proctor-instructions/proctor-instructions.component';
import { FormsModule } from '@angular/forms'
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    InstructionsComponent,
    NavComponent,
    TaskComponent,
    ControlPanelComponent,
    ProctorInstructionsComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
