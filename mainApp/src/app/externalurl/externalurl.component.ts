import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    templateUrl: './externalurl.component.html'
})

export class ExternalUrlComponent {

    externalUrl: SafeUrl;

    constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
        this.externalUrl = sanitizer.bypassSecurityTrustResourceUrl(route.snapshot.data['externalUrl']);
    }
}