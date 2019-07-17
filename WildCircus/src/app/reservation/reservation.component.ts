import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';
import { DbWildCircusService } from '../db-wild-circus.service';
import { Reservation } from '../models/reservation.model';
import { Artist } from '../models/artists.model';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

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

  reservationData: Reservation[];
  artistsData: Artist[];

  date = new Date('2019-07-19 00:00:01');
  dateFormat = this.date.getDate();

  postData = new Reservation('', '', null, '' );

  constructor(private dataService: DbWildCircusService) { }

  ngOnInit() {
    this.dataService.getReservation().subscribe(reservation => {
      this.reservationData = reservation;
      console.log(this.reservationData);
    });

    this.dataService.getArtists().subscribe(artist => {
      this.artistsData = artist;
      console.log(this.artistsData);
    });



  }

  bookArtist(data) {

  }

}
