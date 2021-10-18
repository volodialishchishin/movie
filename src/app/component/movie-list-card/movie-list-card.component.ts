import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.scss']
})
export class MovieListCardComponent implements OnInit {

  @Input()
  film : any;

  @Input()
  theme:any;
  constructor() {
  }


  ngOnInit(): void {
  }


}
