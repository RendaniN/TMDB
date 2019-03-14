import { Component, OnInit } from '@angular/core';
import { MoviesDb } from '../services/moviesdb.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  movies: any = [];
  searchRes: any = [];
  loading: boolean;
  searchString: String;

  constructor(private moviedb: MoviesDb) {
    this.loading = true;
  }

  ngOnInit() {}
}
