import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { ContainerComponent } from './container/container.component';
import { PokeballIconComponent } from './pokeball-icon/pokeball-icon.component';

@NgModule({
  declarations: [CardInfoComponent, ContainerComponent, PokeballIconComponent],
  exports: [CardInfoComponent, ContainerComponent, PokeballIconComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
