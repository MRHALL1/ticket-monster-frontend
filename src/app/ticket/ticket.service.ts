import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Ticket} from './ticket';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TicketService {

  private ticketUrl = 'http://localhost:3000/ticket';

  constructor(private http: Http) {}

  public getAllTickets(): Observable<Ticket[]> {
    return this.http.get(this.ticektUrl)
      .map(this.extractData);
  }

  public createTicket(ticket: Ticket): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.ticketUrl, ticket, options);
  }

  public getTicket(id: string): Observable<Ticket> {//was previously getEvent
    return this.http.get(this.ticketUrl + '/' + id)
      .map(this.extractData);
  }

  public updateTicket(ticket: Ticket): Observable<any> {//was previously updateEvent
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.ticketUrl + '/' + ticket._id, ticket, options);
  }

  private extractData(res: Response) {
    console.log(res.json());
    const body = res.json();
    console.log(body.data);
    return body.data || { };
  }
}
