/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define interfaces para segurança de tipos
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

  // Método para buscar múltiplos Pokémon com limite e offset
  getPokemons(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}&offset=${offset}`).pipe(catchError(this.handleError));
  }

  // Método para buscar um Pokémon específico pelo ID
  getPokemonById(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // Método para buscar um Pokémon específico pelo nome ou ID
  searchPokemon(query: string): Observable<IPokemon> {
    const url = `${this.baseUrl}/${query.toLowerCase()}`;
    return this.http.get<IPokemon>(url).pipe(catchError(this.handleError));
  }

  // Método para buscar detalhes adicionais do Pokémon
  getPokemonDetails(name: string): Observable<IPokemonSpecies> {
    return this.http.get<IPokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${name}`).pipe(catchError(this.handleError));
  }

  // Tratamento de erros
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
