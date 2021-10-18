import {Component, Input, OnInit} from '@angular/core';
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input()
  genre : any



  constructor(private genreService : GenreService) { }

  ngOnInit(): void {
  }

  getId(id : any) {
    return this.genreService.getGenreFilm(id).subscribe(value =>  console.log(value.results))
  }
}
