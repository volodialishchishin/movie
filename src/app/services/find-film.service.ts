import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FindFilmService {
  searchUrl : string =  'https://api.themoviedb.org/3/search/movie?api_key=2c6c3f035695c3dfc431688a0bd14ae9'

  constructor(private httpClient:HttpClient) {
  }
  getFilmsBySearch (FilmName:string) {
    return this.httpClient.get(this.searchUrl + "/" + FilmName)
  }
}
