import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Venue} from './venue';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class VenueService {

  private venueUrl = 'http://localhost:3000/venue';

  constructor(private http: Http) {}

  public getAllVenues(): Observable<Venue[]> {
    return this.http.get(this.venueUrl)
      .map(this.extractData);
  }

  public createVenue(venue: Venue): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.venueUrl, venue, options);
  }

  public getVenue(id: string): Observable<Venue> {//was previously getEvent
    return this.http.get(this.venueUrl + '/' + id)
      .map(this.extractData);
  }

  public updateVenue(venue: Venue): Observable<any> {//was previously updateEvent
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.venueUrl + '/' + venue._id, venue, options);
  }

  private extractData(res: Response) {
    console.log(res.json());
    const body = res.json();
    console.log(body.data);
    return body.data || { };
  }

}
