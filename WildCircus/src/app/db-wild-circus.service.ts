import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../app/models/artists.model'


@Injectable({
  providedIn: 'root'
})
export class DbWildCircusService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.uri}/artists`);
  }
}
