import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getGenres() : Observable<any>{
    return this.httpClient.get<any>('https://api.themoviedb.org/3/genre/movie/list?api_key=2c6c3f035695c3dfc431688a0bd14ae9')
  }
  getGenreFilm(id:any) : Observable<any>{
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/discover/movie?api_key=2c6c3f035695c3dfc431688a0bd14ae9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
  }
}
