import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';
import { DbWildCircusService } from '../db-wild-circus.service';
import { Artist } from '../models/artists.model';

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

  constructor(private dataService: DbWildCircusService) { }

  ngOnInit() {
    this.dataService.getArtists().subscribe(artist => {
      this.artistsData = artist;
      console.log(this.artistsData);
    });
  }

}
