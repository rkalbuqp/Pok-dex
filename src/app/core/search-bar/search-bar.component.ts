/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchQuery: string = '';
  pokemonData: any = null;
  filteredPokemons: any;
  pokemons: any;

  constructor(private http: HttpClient) {}

  searchPokemon(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredPokemons = this.pokemons.filter((pokemon: { name: string }) => pokemon.name.toLowerCase().includes(query));
  }
}
