import { CardInfoComponent } from './components/card-info/card-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardInfoComponent],
  exports: [CardInfoComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
