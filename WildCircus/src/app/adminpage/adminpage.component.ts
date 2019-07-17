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
    this.dataService.getClients().subscribe(reservation => {
      this.reservationData = reservation;
      console.log(this.reservationData);
    });
  }


  remove(delID: number) {
    this.dataService.deleteReservation(delID).subscribe(() => console.log(`Réservation ${delID} annulée`),
      (err) => console.log(err)
    );
    for (let i = 0; i < this.reservationData.length; i++) {
      if (this.reservationData[i].id === delID) {
        this.reservationData.splice(i, 1);
        break;
      }
    }
  }

}
