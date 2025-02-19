import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './data/flight';

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

    const url = 'https://demo.angulararchitects.io/api/flight';

    return this.http.get<Flight[]>(url, { params, headers });
  }

}
