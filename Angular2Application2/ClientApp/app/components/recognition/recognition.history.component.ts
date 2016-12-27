import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecognitionList } from './recognition.list.model';

@Component({
    selector: 'recent-recognition',
    template: require('./recent.recognition.component.html')
})

export class RecognitionsHistoryComponent implements OnInit {

    public pageTitle: string;
    public fullInterval: string;
    public recognitions: Observable<RecognitionList[]>;

    ngOnInit(): void {
        this.pageTitle = "Super Ged3an History";
        //TODO: Initialize recognitions...
        this.recognitions = new Observable<RecognitionList[]>();
        this.fullInterval = "From Q1 2013 to Q3 2016";
    }
}
