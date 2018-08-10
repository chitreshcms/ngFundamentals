import {Component,OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
// import { ToastrService } from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
// import {EventThumbnailComponent} from './event-thumbnail.component';
@Component({
    // selector:'events-list',
    template:`
    <div>
       <h1>
           Upcoming Angular Events 
       </h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event" ></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit{

    events:any[];
    constructor (private eventService:EventService, private activatedRoute:ActivatedRoute)
    {
        
    }
    ngOnInit(){
        // this.eventService.getEvents().subscribe(events => {this.events=events})
        this.events=this.activatedRoute.snapshot.data['events'];

    }

    // events = [
       
    //   ]
// handleEventClicked(data){
//     console.log("received : ", data);


// }
}