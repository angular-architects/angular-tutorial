import { Component, inject, signal } from '@angular/core';
import { Flight, initFlight } from '../data/flight';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FlightService } from '../flight.service';
import { first } from 'rxjs';
import { FlightCardComponent } from '../flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search', // <app-flight-search />
  imports: [
    FormsModule, 
    JsonPipe, 
    FlightCardComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = signal('Graz');
  to = signal('Hamburg');
  
  flights = signal<Flight[]>([]);
  selectedFlight = signal(initFlight);

  basket = signal<Record<number, boolean>>({})

  search(): void {

    this.flightService
      .search(this.from(), this.to())
      .pipe(first())
      .subscribe((flights) => {
        this.flights.set(flights);
      });
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight.set(flight);
  }

  updateBasket(flightId: number, selected: boolean): void {
    this.basket.update(basket => ({
      ...basket, 
      [flightId]: selected,
    }));
  }
}
