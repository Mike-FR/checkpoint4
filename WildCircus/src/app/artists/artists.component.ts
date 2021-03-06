import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';
import { DbWildCircusService } from '../db-wild-circus.service';
import { Artist } from '../models/artists.model';
import { AlertComponent } from 'ngx-bootstrap';

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

  artistsData: Artist[];
  isCollapsed = {};
  max = 5;
  isReadonly = false;

  alerts: any[] = [{ }];


  constructor(private dataService: DbWildCircusService) { }

  ngOnInit() {
    this.dataService.getArtists().subscribe(artist => {
      this.artistsData = artist;
      console.log(this.artistsData);
    });
  }

  add(note): void {
    this.alerts.push({
      type: 'warning',
      msg: `(${new Date().toLocaleTimeString()}) Merci ! Votre vote a bien été enregistré.`,
      timeout: 4000
    });

  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
