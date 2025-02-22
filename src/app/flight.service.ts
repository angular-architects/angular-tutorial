import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './data/flight';

const url = 'https://demo.angulararchitects.io/api/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);

  search(from: string, to: string): Observable<Flight[]> {
    const params = { from, to };

    const headers = {
      accept: 'application/json'
    };

    return this.http.get<Flight[]>(url, { params, headers });
  }

  findById(id: number): Observable<Flight> {
    const params = { id };

    const headers = {
      accept: 'application/json'
    };

    return this.http.get<Flight>(url, { params, headers });
  }

  save(flight: Flight): Observable<Flight> {
    const headers = {
      accept: 'application/json'
    };

    return this.http.post<Flight>(url, flight, { headers });
  }

}
