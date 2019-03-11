import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieArtwork'
})
export class MovieArtworkPipe implements PipeTransform {

  transform(movies: any): any {

    let url = "http://image.tmdb.org/t/p/w400";

    if (movies.poster_path) {
      return url + movies.poster_path;
    } 
    else 
    {
      if (movies.backdrop_path) {
        return url + movies.backdrop_path;
      } 
      else 
      {
        return "assets/img/noimage.png";
      }
    }
  }

}
