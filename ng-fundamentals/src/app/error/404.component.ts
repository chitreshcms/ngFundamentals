import {Component} from '@angular/core';
@Component({
    template:`
        <div class="errorMessage">
            <h3> 404 Page Not Found. </h3>
            <h6>Check the Parameters again</h6>
        </div>
    `,
    styles:[`
        .errorMessage{
            margin-top:200px;
            margin-left:300px;
        }
    `]
})
export class Error404Component{

    constructor()
    {
        
    }
}