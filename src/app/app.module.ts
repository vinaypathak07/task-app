import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTaskComponent } from './my-task/my-task.component';
import { TaskStatusComponent } from './my-task/task-status/task-status.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTaskComponent,
    TaskStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
