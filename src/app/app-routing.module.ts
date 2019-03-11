import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "movies/:id", component: MoviesComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
