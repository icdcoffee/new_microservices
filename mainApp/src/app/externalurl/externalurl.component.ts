import { Component } from '@angular/core';
import { RouterState, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './externalurl.component.html'
})

export class ExternalUrlComponent {

    constructor(router: Router, route: ActivatedRoute) {
        window.location.href = route.snapshot.data['externalUrl'];
    }
}