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

  isCollapsed = {};
  artistsData: Artist[];
  max = 5;
  isReadonly = false;

  alerts: any[] = [{ }];

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `(${new Date().toLocaleTimeString()}) Merci ! Votre vote a bien été enregistré.`,
      timeout: 4000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  constructor(private dataService: DbWildCircusService) { }

  ngOnInit() {
    this.dataService.getArtists().subscribe(artist => {
      this.artistsData = artist;
      console.log(this.artistsData);
    });
  }

}
