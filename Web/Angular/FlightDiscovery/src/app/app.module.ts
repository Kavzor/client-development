import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { TimePipe } from './time.pipe';
import { ClockPipe } from './clock.pipe';
import { FlightService } from './shared/flight.service';


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    TimePipe,
    ClockPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
