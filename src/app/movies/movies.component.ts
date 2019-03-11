import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDb } from '../services/moviesdb.services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies: any = {};
  loading: boolean = false;

  constructor(private router: ActivatedRoute, private moviedb: MoviesDb) {

    this.loading = true;
    this.router.params.subscribe(params => {
      this.moviedb.getMovie(params['id']).subscribe(movies => {
          this.movies = movies;
          console.log(movies);
          this.loading = false;
      })
    })

  }
}