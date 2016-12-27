import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RecognitionList } from './recognition.list.model';
import { RecognitionService } from './recognition.service'; 

@Component({
    selector: 'recent-recognition',
    template: require('./recent.recognition.component.html')
})

export class RecognitionsHistoryComponent implements OnInit {

    public pageTitle: string;
    public fullInterval: string;
    public recognitions: RecognitionList[];

    constructor(private recognitionService: RecognitionService)
    {
    }

    ngOnInit(): void {
        this.pageTitle = "Super Ged3an History";

        this.recognitionService.getRecognitions().subscribe(r => this.recognitions = r);

    }
}
