import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
