import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieListComponent} from "./component/movieList/movieList.component";
import { MovieListCardComponent } from './component/movie-list-card/movie-list-card.component';
import { PosterPreviewComponent } from './component/poster-preview/poster-preview.component';
import { RatingComponent } from './component/rating/rating.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import {HttpClientModule} from "@angular/common/http";
import { GenreBadgeComponent } from './component/genre-badge/genre-badge.component';
import { GenreComponent } from './component/genre/genre.component';
import {RouterModule} from "@angular/router";
import {routes} from "./component/routes/routes";
import { FilmInfoComponent } from './component/film-info/film-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieListCardComponent,
    PosterPreviewComponent,
    RatingComponent,
    MovieInfoComponent,
    GenreBadgeComponent,
    GenreComponent,
    FilmInfoComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
