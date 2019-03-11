import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '/home.compponent.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  latestMovies: any[] = [];
  
  constructor(private moviesdb: MoviesDb) { 

    this.latestMovies.moviesdb.getDiscoverMovies().subscribe((data: any) => {
      this.latestMovies = data; 
    });
  }

}
