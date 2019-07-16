import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
