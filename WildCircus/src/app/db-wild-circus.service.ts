import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../app/models/artists.model';
import { Reservation } from '../app/models/reservation.model';


@Injectable({
  providedIn: 'root'
})
export class DbWildCircusService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.url}/artists`);
  }

  getClients(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/clients`);
  }

  postArtist(postData): Observable<any> {
    return this.http.post(`${this.url}/artists`, postData);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/admin/${id}`);
  }

}
