import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Badge } from './badge.model';

@Component({
    selector: 'badge-list',
    template: require('./badge.list.component.html')
})

export class BadgeListComponent implements OnInit {

    public badges: Observable<Badge[]>

    ngOnInit(): void {
        //TODO: Initialize recognitions...
    }
}
