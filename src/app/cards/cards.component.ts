import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  getMovie(item: any){
    let movieId;
    movieId = item.id;
    this.router.navigate(['/movies', movieId]);
  }

}
