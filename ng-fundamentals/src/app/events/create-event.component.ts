import {Component} from '@angular/core';
import { Router} from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

@Component(
    {
        template:`
            <h1>Create New Event</h1>
            <hr>
            <br>
            <div class="col-md-6">
                <h3>Enter the details</h3>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
            </div>
        `
    }
)
export class CreateEventComponent{

    public isDirty:boolean=true;
    constructor(private routerService:Router){

    }
    cancel(){
        this.routerService.navigate(['events/']);
    }
}