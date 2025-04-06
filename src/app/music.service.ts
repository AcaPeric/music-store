// src/app/music.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:3000/api'; // URL for the server

  constructor(private http: HttpClient) {}

  getInstruments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/instruments`);
  }

  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/artists`);
  }
}
