import { Component } from "@angular/core";
import { MoviesDb } from '../services/moviesdb.services';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

  searchRes: any = [];
  loading: boolean;

  constructor(private moviedb: MoviesDb) {}
}
