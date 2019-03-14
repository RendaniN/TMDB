import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MoviesDb {

  private api: string = "https://api.themoviedb.org/3";
  private apikey: string = "7536392b5281f105cf041e1c0649bb2b";

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getQueryforMovies(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${this.apikey}&language=en&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getSearchedMovie(query: string){
    return this.getQuery(`/search/movie?query=${query}&sort_by=popularity.desc`).pipe(map((data: any) => data.results));
  }

  getMovie(id: string) {
    return this.getQueryforMovies(`/movie/${id}`).pipe(map((data: any) => data));
  }

}