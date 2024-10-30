/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  }
}
