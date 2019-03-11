import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { PreflightComponent } from './preflight/preflight.component';

import { MatCardModule, MatGridListModule, MatDividerModule,  MatToolbarModule, MatIconModule, MatFormFieldModule,
MatAutocompleteModule} from '@angular/material';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MovieArtworkPipe } from './movie-artwork.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    MoviesComponent,
    HeaderComponent,
    PreflightComponent,
    MovieArtworkPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
