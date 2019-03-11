import { Component, OnInit } from "@angular/core";
import { MoviesDb } from '../services/moviesdb.services';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  movie: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviesDb) {}

  search(searchString: string) {

    this.loading = true;
    this.moviedb.getSearchedMovie(searchString).subscribe((data: any) => {

      this.movie = data;
      this.loading = false;
    });
  }
}
