import {Component, OnInit} from '@angular/core';
import {Location} from './location';
import {LocationService} from './location.service';

@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  locations: Location[];

  ngOnInit() {
    this.getAllLocations();
  }


  constructor(private locationService: LocationService) {

  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe(
      data => {
        console.log(data);
        this.locations = data;
      },
      error => {
        console.log(error.json());
      }
    );
  }
}
