import {
  booleanAttribute,
  Component,
  inject,
  input,
  numberAttribute,
  OnInit,
  signal,
} from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../data/flight';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  imports: [FormsModule],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css',
})
export class FlightEditComponent implements OnInit {
  private flightService = inject(FlightService);

  id = input.required({ transform: numberAttribute });
  showDetails = input.required({ transform: booleanAttribute });

  from = signal('');
  to = signal('');
  date = signal('');

  error = signal('');

  ngOnInit(): void {
    this.flightService.findById(this.id()).subscribe((flight) => {
      this.setFlight(flight);
    });
  }

  private setFlight(flight: Flight) {
    this.from.set(flight.from);
    this.to.set(flight.to);
    this.date.set(flight.date);
  }

  save(): void {
    this.error.set('');

    const flight: Flight = {
      id: this.id(),
      from: this.from(),
      to: this.to(),
      date: this.date(),
    };

    this.flightService.save(flight).subscribe({
      next: (flight) => {
        this.setFlight(flight);
      },
      error: (err) => {
        this.error.set(err.error ?? err.message ?? err);
        throw err;
      }
    });
  }
}
