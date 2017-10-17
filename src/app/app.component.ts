import { Component } from '@angular/core';

import { Account } from './account/account';
import { Event } from './event/event';
import { Location } from './location/location';
import { Ticket } from './ticket/ticket';
import { Venue } from './venue/venue';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  eventName = 'My cool event';

  locations = [
    {name: "Nashville", code: "37205"},
    {name: "Franklin", code: "37205"},
    {name: "Green Hill", code: "37205"},
    {name: "Lipscomb", code: "37205"},
  ];

  accounts = [
    {username: "Mac", password:"pass", email: "mac@mail.com", phone: "867-5309"},
    {username: "Byce", password:"pass", email: "bryce@mail.com", phone: "867-5309"},
    {username: "Dave", password:"pass", email: "dave@mail.com", phone: "867-5309"}
  ]

}
