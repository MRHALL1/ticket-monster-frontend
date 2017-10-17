import {Component, OnInit} from '@angular/core';
import {Ticket} from './ticket';
import {TicketService} from './ticket.service';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent implements OnInit {

  tickets: Ticket[];

  ngOnInit() {
    this.getAllTickets();
  }


  constructor(private ticketService: TicketService) {

  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe(
      data => {
        console.log(data);
        this.tickets = data;
      },
      error => {
        console.log(error.json());
      }
    );
  }
}
