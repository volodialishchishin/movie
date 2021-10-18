import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_KEY: string = 'api_key=2c6c3f035695c3dfc431688a0bd14ae9';
const API_BASE: string = 'https://api.themoviedb.org/3';
export const API_POPULAR_FILMS: string = API_BASE + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
export let lastUrl = '';


@Injectable({
  providedIn: 'root'
})


export class FilmsService {

  constructor(private httpClient: HttpClient) {
  }

  getFilms(url: string) {
    lastUrl = url;
    return this.httpClient.get(url)
  }


}
