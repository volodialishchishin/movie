import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services/genre.service";
import { IGenreClass} from "../../models/IGenre";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.scss']
})

export class GenreBadgeComponent implements OnInit {


  genresArr : any;
  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => this.getInfo(value))
  }
  getInfo(value:IGenreClass){
    console.log(value.genres);
    this.genresArr = value.genres;
  }
}
