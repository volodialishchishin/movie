import { Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }
  @Input()
  theme : any
  filmName:any;

  ngOnInit(): void {
  }

  onSubmit() {
    return console.log(this.filmName);
  }
}
