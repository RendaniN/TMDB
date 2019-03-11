import { Component } from '@angular/core';
import { MoviesDb } from './services/moviesdb.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MWEB Assessment';

  constructor(public movieservice: MoviesDb){
    this.movieservice.getDiscoverMovies().subscribe(data => console.log(data));
  }
}
