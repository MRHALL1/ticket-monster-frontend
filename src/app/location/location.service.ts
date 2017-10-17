import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Location} from './location';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocationService {

  private locationUrl = 'http://localhost:3000/location';

  constructor(private http: Http) {}

  public getAllLocations(): Observable<Location[]> {
    return this.http.get(this.locationUrl)
      .map(this.extractData);
  }

  public createLocation(location: Location): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.locationUrl, location, options);
  }

  public getLocations(id: string): Observable<Location> {//was previously getEvent
    return this.http.get(this.locationUrl + '/' + id)
      .map(this.extractData);
  }

  public updateLocation(location: Location): Observable<any> {//was previously updateEvent
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.locationUrl + '/' + location._id, location, options);
  }

  private extractData(res: Response) {
    console.log(res.json());
    const body = res.json();
    console.log(body.data);
    return body.data || { };
  }

}
