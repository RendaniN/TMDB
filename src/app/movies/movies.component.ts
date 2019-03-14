import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesDb } from '../services/moviesdb.services';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  myControl = new FormControl();
  options: any = [];
  movies: any = {};
  searchRes: any = [];
  loading: boolean = false;
  item: any;

  constructor(private router: ActivatedRoute, private route :Router, private moviedb: MoviesDb) {

    this.loading = true;
    this.router.params.subscribe(params => {
      this.moviedb.getMovie(params['id']).subscribe(movies => {
          this.movies = movies;
          console.log(movies);
          this.loading = false;
      })
    })
  }

  ngOnInit(){
    this.myControl.valueChanges.subscribe(
      term => {
        if (term != '') {
          
          this.moviedb.getSearchedMovie(term).subscribe(
            data => {
              this.options = data as any[];
          })
        }
    })
  }

  searchMovies(searchString: string) {
    this.loading = true;
    this.moviedb.getSearchedMovie(searchString).subscribe((data: any) => {
      this.searchRes = data;
      this.loading = false;
    
    });
  }

  getMovie(item: any){
    let movieId;
    movieId = item.id;
    this.route.navigate(['/movies', movieId]);
  }
}