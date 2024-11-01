/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define interfaces for better type safety
export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export interface IPokemonSpecies {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  evolution_chain: { url: string };
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // New method added
  getPokemonById(id: number): Observable<IPokemon> {
    return this.getPokemon(id); // Calls the existing method
  }

  getPokemonDetails(name: string): Observable<IPokemonSpecies> {
    return this.http.get<IPokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${name}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
