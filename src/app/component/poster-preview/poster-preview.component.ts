import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.scss']
})

export class PosterPreviewComponent implements OnInit {
  @Input()
  poster : any;

  constructor() { }

  ngOnInit(): void {
  }

}
