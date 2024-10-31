import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  @Input() namePokemon: string = 'Undedfined';
  @Input() description: string = 'Undedfined';
  @Input() listOfPokemonTypes: string[] = ['Undedfined'];
  @Input() posNumber: number = 0;
  @Input() imageURL: string = '';

  formattedPosNumber() {
    // deixa no formato `#000`.
    return `#${this.posNumber.toString().padStart(3, '0')}`;
  }
}
