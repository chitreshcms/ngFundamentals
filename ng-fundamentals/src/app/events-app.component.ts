import { Component } from '@angular/core';

import {EventsListComponent} from './events/events-list.component';
import {NavBarComponent} from './nav/nav-bar.component';
@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <hr/>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
