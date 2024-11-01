/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() namePokemon: string = 'Undefined';
  @Input() description: string = '';
  @Input() listOfPokemonTypes: string[] = [];
  @Input() posNumber: number = 0;
  @Input() imageURL: string = '';

  pokemonData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon.toLowerCase()}`).subscribe((data: any) => {
      this.pokemonData = data;
      this.imageURL = data.sprites?.other['official-artwork'].front_default;
      this.posNumber = data.id;
      this.listOfPokemonTypes = data.types.map((typeObj: any) => typeObj.type.name);

      // Buscando a descrição
      this.fetchPokemonSpecies(data.species.url);
    });
  }

  fetchPokemonSpecies(speciesUrl: string) {
    this.http.get(speciesUrl).subscribe((speciesData: any) => {
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
    });
  }

  formattedPosNumber() {
    return `#${this.posNumber.toString().padStart(3, '0')}`;
  }

  navigateToDetails() {
    this.router.navigate(['/details']);
  }
}
