import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
