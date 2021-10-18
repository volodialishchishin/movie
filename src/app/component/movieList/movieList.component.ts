import {Component, OnInit} from '@angular/core';
import {API_POPULAR_FILMS, FilmsService} from "../../services/films.service";

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let totalPage = 100;


@Component({
  selector: 'app-main',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.scss']
})
export class MovieListComponent implements OnInit {

  tagsEL:any
  Prev: any
  Next : any;
  films: any;
  theme: any;
  NumberPage: any;

  constructor(private FilmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.FilmsService.getFilms(API_POPULAR_FILMS).subscribe(value => {

      this.getInfo(value)
    })

  }

  getInfo(value: any) {
    console.log(value);
    this.films = value.results;
    this.NumberPage = value.page;
    currentPage = value.page;
    nextPage = currentPage + 1;
    prevPage = currentPage - 1;
    totalPage = value.total_pages;
    if(currentPage == 1){
      this.Prev = document.getElementById('prev')
      this.Prev.classList.add('disabled')
    }
    else if (currentPage == totalPage){
      this.Next = document.getElementById('next')
      this.Next.classList.add('disabled')
    }
    else{
      this.Prev.classList.remove('disabled')
      this.Next.classList.remove('disabled')
    }
  }

  changeTheme() {
    if (this.theme == 'light')
      this.theme = 'black'
    else
      this.theme = 'light'
  }

  prev() {
    if (prevPage > 0) {
      this.tagsEL = document.getElementById('tags')
      this.pageCall(prevPage)
      this.tagsEL.scrollIntoView({behavior:"smooth"})
    }
    // else  {
    //   this.Prev = document.getElementById('prev')
    //   this.Prev.classList.add('disabled')
    // }
  }

  next() {
    if (nextPage <= totalPage) {
      this.tagsEL = document.getElementById('tags')
      this.pageCall(nextPage)
      this.tagsEL.scrollIntoView({behavior:"smooth"})
    }
  }


  private pageCall(page: number) {
    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2c6c3f035695c3dfc431688a0bd14ae9&page=${page}`
    this.FilmsService.getFilms(url).subscribe(value => {
      this.getInfo(value);

    })


  }

}

