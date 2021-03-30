import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './externalurl.component.html',
    providers: [ Router ]
})

export class ExternalUrlComponent {

    constructor(private router: Router) {
        router.navigateByUrl('http://www.google.com');
    }
}