/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() namePokemon: string = 'Undefined';
  @Input() description: string = '';
  @Input() listOfPokemonTypes: string[] = ['Undefined'];
  @Input() posNumber: number = 0;
  @Input() imageURL: string = '';

  pokemonData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {} // Injetar Router

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon.toLowerCase()}`).subscribe((data: any) => {
      this.pokemonData = data;
      this.imageURL = this.pokemonData?.sprites?.other['official-artwork'].front_default;

      // Agora fazemos a requisição para a espécie do Pokémon para obter a descrição
      this.fetchPokemonSpecies(this.pokemonData.species.url);
    });
  }

  fetchPokemonSpecies(speciesUrl: string) {
    this.http.get(speciesUrl).subscribe((speciesData: any) => {
      const flavorTextEntries = speciesData.flavor_text_entries;
      const englishDescription = flavorTextEntries.find((entry: { language: { name: string } }) => entry.language.name === 'en');

      if (englishDescription) {
        // Limpeza da descrição
        this.description = englishDescription.flavor_text
          .replace(/[\n\r\f]+/g, ' ') // Remove quebras de linha e caracteres de quebra de página
          .replace(/”/g, '"') // Substitui aspas
          .replace(/“/g, '"') // Substitui aspas
          .trim(); // Remove espaços extras no início e no final
      } else {
        this.description = 'Description not available';
      }
    });
  }

  formattedPosNumber() {
    return `#${this.posNumber.toString().padStart(3, '0')}`;
  }

  navigateToDetails() {
    this.router.navigate(['/details']); // Navega para a página de detalhes
  }
}
