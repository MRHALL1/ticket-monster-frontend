import { Component } from '@angular/core';
import {EventService} from "./event.service";

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  
  events: any;

  constructor(private  eventService: EventService) {}

  getMyEvents(): any {
    return this.eventService.getAllEvents();
  }

}
