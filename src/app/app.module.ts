import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, FormsModule],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
