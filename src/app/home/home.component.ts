import { Component, OnInit } from '@angular/core';
import { MoviesDb } from '../services/moviesdb.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviesDb) {

    this.loading = true;

    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.movies = data;
        this.loading = false;
      });

  }


}
