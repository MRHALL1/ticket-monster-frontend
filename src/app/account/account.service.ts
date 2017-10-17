import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Account} from './account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {

  private accountUrl = 'http://localhost:3000/account';

  constructor(private http: Http) {}

  public getAllAccounts(): Observable<Account[]> {
    return this.http.get(this.accountUrl)
      .map(this.extractData);
  }

  public createAccount(account: Account): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.accountUrl, account, options);
  }

  public getAccounts(id: string): Observable<Account> {//was previously getEvent
    return this.http.get(this.accountUrl + '/' + id)
      .map(this.extractData);
  }

  public updateAccount(account: Account): Observable<any> {//was previously updateEvent
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.accountUrl + '/' + account._id, account, options);
  }

  private extractData(res: Response) {
    console.log(res.json());
    const body = res.json();
    console.log(body.data);
    return body.data || { };
  }

}
