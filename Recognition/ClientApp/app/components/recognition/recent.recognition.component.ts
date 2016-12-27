import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { RecognitionList } from './recognition.list.model'; 
import { RecognitionService } from './recognition.service'; 

@Component({
    selector: 'recent-recognition',
    template: require('./recent.recognition.component.html')
})

export class RecentRecognitionsComponent implements OnInit{

    public pageTitle: string;
    public recognitions: RecognitionList;

    constructor(
        private recognitionService: RecognitionService,
    ) {
        
    }

    ngOnInit(): void {
        this.pageTitle = "Super Ged3an";

        this.recognitionService.getRecentRecognitions().subscribe(r => this.recognitions = r);
    }
}
