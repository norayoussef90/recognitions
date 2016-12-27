import { Injectable } from '@angular/core'
import { RecognitionList } from './recognition.list.model';

import { Http } from '@angular/http';

//Importing toPromise operator which extends Angular Observable 
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import 'rxjs/Rx';

@Injectable()
export class RecognitionService {

    constructor(private http: Http) {

    }

    
    getRecognitions(): Observable<RecognitionList[]> {
        let recognitionsUrl: string = '/api/SampleData/RecentRecognitions';

        return this.http.get(recognitionsUrl)
            .map(r => r.json())
            .catch(this.handleError);

    }  

    getRecentRecognitions(): Observable<RecognitionList> {

        let recognitionsUrl: string = '/api/SampleData/RecentRecognitions';

        return this.http.get(recognitionsUrl)
            .map(r => r.json())
            .catch(this.handleError);

    }
    //getRecentRecognitions(): Promise<RecognitionList> {

    //    return this.http.get(this.recognitionsUrl)
    //        .toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);

    //}

    private extractData(res: any) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}