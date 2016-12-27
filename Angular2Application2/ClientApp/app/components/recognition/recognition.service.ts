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

    //recognitionsUrl: string = 'http://localhost:55503/api/test';
    recognitionsUrl: string = 'app/recognitions';

    getRecognitions(): Promise<RecognitionList[]> {
        
        return this.http.get(this.recognitionsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    getRecentRecognitions(): Promise<RecognitionList> {

        return this.http.get(this.recognitionsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: any) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}