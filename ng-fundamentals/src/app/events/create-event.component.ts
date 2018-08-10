import {Component} from '@angular/core';
import { Router} from '@angular/router';
import { EventService } from './shared/event.service';
// import {  } from '@angular/forms';
// import { Route } from '@angular/compiler/src/core';

@Component(
    {
        templateUrl:'./create-event.component.html',
        styles:[`
    em{float:right; color:#E05C65; padding -left: 11px;}
    .error input{background-color:#E3C3C5;}
    .error :: -webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error : -ms-input-placeholder{color:#999;}
    `]
    }
)
export class CreateEventComponent{

    public isDirty:boolean=true;
     newEvent;
    constructor(private routerService:Router,private eventService:EventService){

    }
    saveEvent(formValues)
    {
        // console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty=false;
        this.routerService.navigate(['events/']);

    }
    cancel(){
        this.routerService.navigate(['events/']);
    }
}