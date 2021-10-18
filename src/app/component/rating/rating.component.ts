import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  InfoFilm : any;
  @Input()
  theme : any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(vote_average: number) {
    if (vote_average >= 8){
      return 'green'
    }
    else if (vote_average >= 7){
      return 'orange'
    }
    else{
      return 'red'
    }
  }
}
