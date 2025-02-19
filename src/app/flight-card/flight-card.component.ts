import { Component, input, model, output } from '@angular/core';
import { Flight } from '../data/flight';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css'
})
export class FlightCardComponent {

  item = input.required<Flight>();
  // selected = input.required<boolean>();
  // selectedChange = output<boolean>();
  selected = model.required<boolean>();

  select(): void {
    this.selected.set(true);
  }

  unselect(): void {
    this.selected.set(false);
  }

}
