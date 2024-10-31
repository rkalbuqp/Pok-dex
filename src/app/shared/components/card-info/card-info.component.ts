/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() namePokemon: string = 'Undefined';
  @Input() description: string = 'Undefined';
  @Input() listOfPokemonTypes: string[] = ['Undefined'];
  @Input() posNumber: number = 0;
  @Input() imageURL: string = ''; // Adicionando `imageURL` como um @Input()

  pokemonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPokemonData();
  }

  fetchPokemonData() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon.toLowerCase()}`).subscribe((data) => {
      this.pokemonData = data;
      this.imageURL = this.pokemonData?.sprites?.other['official-artwork'].front_default;
    });
  }

  formattedPosNumber() {
    return `#${this.posNumber.toString().padStart(3, '0')}`;
  }
}
