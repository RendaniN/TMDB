import { Component, OnInit } from '@angular/core';
import { MoviesDb } from '../services/moviesdb.services';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  myControl = new FormControl();
  options: any = [];
  showDiv: Boolean = true;
  movies: any = [];
  searchRes: any = [];
  loading: boolean;
  searchString: String;

  constructor(private moviedb: MoviesDb) {
    this.loading = true;
    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data;
        this.loading = false;
      });
  }

  ngOnInit() {

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

}
