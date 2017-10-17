import {Component, OnInit} from '@angular/core';
import {Venue} from './venue';
import {VenueService} from './venue.service';

@Component({
  selector: 'venue',
  templateUrl: './venue.component.html'
})
export class VenueComponent implements OnInit {

  venues: Venue[];

  ngOnInit() {
    this.getAllVenues();
  }


  constructor(private venueService: VenueService) {

  }

  getAllVenues() {
    this.venueService.getAllVenues().subscribe(
      data => {
        console.log(data);
        this.venues = data; //venues?
      },
      error => {
        console.log(error.json());
      }
    );
  }
}
