import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import all components
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { EventComponent } from './event/event.component';
import { LocationComponent } from './location/location.component';
import { TicketComponent } from './ticket/ticket.component';
import { VenueComponent } from './venue/venue.component';
//Import all services
import {AccountService} from './account/account.service';
import {EventService} from './event/event.service';
import {LocationService} from './location/location.service';
import {TicketService} from './ticket/ticket.service';
import {VenueService} from './venue/venue.service';

//import Router module
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    EventComponent,
    LocationComponent,
    TicketComponent,
    VenueComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
      ,
      {
        path: 'accounts',
        component: AccountComponent
      }
      ,
      {
        path: 'events',
        component: EventComponent
      }
      ,
      {
        path: 'locations',
        component: LocationComponent
      }
      ,
      {
        path: 'tickets',
        component: TicketComponent
      }
      ,
      {
        path: 'venues',
        component: VenueComponent
      }
    ])
  ],
  providers: [
    AccountService,
    EventService,
    LocationService,
    TicketService,
    VenueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
