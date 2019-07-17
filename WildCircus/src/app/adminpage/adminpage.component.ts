import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { DbWildCircusService } from '../db-wild-circus.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  reservationData: Reservation[];

  constructor(private dataService: DbWildCircusService) { }

  ngOnInit() {
    this.dataService.getReservation().subscribe(reservation => {
      this.reservationData = reservation;
      console.log(this.reservationData);
    });
  }

  remove() {

  }

}
