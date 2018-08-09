import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//since we created barrel
import {
EventsListComponent,
EventThumbnailComponent,
EventService,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver
}from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ToastrService } from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {HttpModule, Http} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {appRoutes} from './../routes';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  entryComponents:[Error404Component],
  providers: [EventService,ToastrService,HttpClientModule,EventRouteActivator,EventListResolver,AuthService,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm("Do you really want to cancel? All changes will be lost.");
  }
  return true;
}