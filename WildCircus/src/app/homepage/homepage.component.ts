import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
