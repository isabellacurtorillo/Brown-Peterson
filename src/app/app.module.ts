import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { TaskComponent } from './task/task.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ProctorInstructionsComponent } from './proctor-instructions/proctor-instructions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { provideHttpClient } from '@angular/common/http';
import { DataHandlerComponent } from './task/data-handler/data-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    NavComponent,
    TaskComponent,
    ControlPanelComponent,
    ProctorInstructionsComponent,
    DataHandlerComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
