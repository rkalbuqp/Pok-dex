import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule, FormsModule, ComponentsModule],
})
export class CoreModule {}
