import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { PreflightComponent } from './preflight/preflight.component';
import { SliderComponent } from './slider/slider.component';
import { createCustomElement } from '@angular/elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatCardModule, MatGridListModule, MatDividerModule,  MatToolbarModule, MatIconModule, MatFormFieldModule,
MatAutocompleteModule,MatInputModule} from '@angular/material';

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
    SliderComponent

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
    MatAutocompleteModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule  
  ],
  entryComponents: [SliderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const slider = createCustomElement(SliderComponent, { injector });
    customElements.define('motley-slider', slider);
  }
}
