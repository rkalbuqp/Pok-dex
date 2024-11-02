/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { PokemonService, IPokemon } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  // Variáveis para armazenar dados do Pokémon e passar para o CardInfoComponent
  namePokemon: string = 'Undefined';
  description: string = '';
  listOfPokemonTypes: string[] = [];
  posNumber: number = 0;
  imageURL: string = '';

  constructor(private pokemonService: PokemonService) {}

  search(event: any) {
    const query = event.target.value.trim();
    this.searchQuery = query;

    if (query.length > 0) {
      this.isLoading = true;
      this.errorMessage = '';

      // Busca o Pokémon e atualiza as variáveis
      this.pokemonService.searchPokemon(query).subscribe(
        (pokemon: IPokemon) => {
          this.namePokemon = pokemon.name;
          this.posNumber = pokemon.id;
          this.imageURL = pokemon.sprites.other['official-artwork'].front_default;
          this.listOfPokemonTypes = pokemon.types.map((typeObj) => typeObj.type.name);

          // Após obter o Pokémon, buscar a descrição detalhada
          this.fetchPokemonSpecies(pokemon.name);

          this.isLoading = false;
        },
        (error: any) => {
          this.errorMessage = 'Nenhum Pokémon encontrado.';
          this.isLoading = false;
        },
      );
    } else {
      this.clearPokemonData();
    }
  }

  // Método para buscar a descrição do Pokémon
  fetchPokemonSpecies(name: string) {
    this.pokemonService.getPokemonDetails(name).subscribe(
      (speciesData: any) => {
        const englishDescription = speciesData.flavor_text_entries.find(
          (entry: { language: { name: string } }) => entry.language.name === 'en',
        );

        if (englishDescription) {
          this.description = englishDescription.flavor_text
            .replace(/[\n\r\f]+/g, ' ')
            .replace(/”|“/g, '"')
            .trim();
        } else {
          this.description = 'Description not available';
        }
      },
      (error) => {
        this.description = 'Description not available';
      },
    );
  }

  // Método para limpar os dados do Pokémon
  clearPokemonData() {
    this.namePokemon = 'Undefined';
    this.description = '';
    this.listOfPokemonTypes = [];
    this.posNumber = 0;
    this.imageURL = '';
  }
}
