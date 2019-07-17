import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { DbWildCircusService } from '../db-wild-circus.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  reservationData: Reservation[];
  artistForm: FormGroup;

  constructor(private dataService: DbWildCircusService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.dataService.getClients().subscribe(reservation => {
      this.reservationData = reservation;
      console.log(this.reservationData);
    });

    this.artistForm = this.fb.group({
      nom : [''],
      description: [''],
      image: [''],
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

  addArtist() {
    this.dataService.postArtist(this.artistForm.value).subscribe()
  }
}
