/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokemonData {
  name: string;
  description: string;
  types: string[];
  id: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFirst151Pokemon();
  }

  fetchFirst151Pokemon() {
    const pokemonRequests = [];
    for (let i = 1; i <= 151; i++) {
      pokemonRequests.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).toPromise());
    }

    Promise.all(pokemonRequests).then((responses: any[]) => {
      this.pokemonList = responses.map((data: any) => ({
        name: data.name,
        description: `The Pokémon ${data.name} has ${data.types.length} type(s) and a base experience of ${data.base_experience}.`,
        types: data.types.map((type: any) => type.type.name),
        id: data.id,
        imageUrl: data.sprites.front_default,
      }));
    });
  }
}
