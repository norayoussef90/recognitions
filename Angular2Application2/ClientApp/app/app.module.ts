import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

//Recognitions
import { BadgeListComponent             } from './components/badges/badge.list.component';
import { RecentRecognitionsComponent  } from './components/recognition/recent.recognition.component';
import { RecognitionsHistoryComponent } from './components/recognition/recognition.history.component';
import { RecognitionService } from './components/recognition/recognition.service';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './components/recognition/in-memory-data.service';

import './rxjs-extensions';

@NgModule({
    bootstrap: [AppComponent],

    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,

        //Recognitions
        BadgeListComponent,          
        RecentRecognitionsComponent ,
        RecognitionsHistoryComponent 
    ],

    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.

        //InMemoryWebApiModule.forRoot(InMemoryDataService),

        RouterModule.forRoot([
            { path: '', redirectTo: 'recent_recognitions', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            //{ path: '**', redirectTo: 'home' },

            //Recognitions
            { path: 'recognitions_history', component: RecognitionsHistoryComponent},
            { path: 'recent_recognitions', component: RecentRecognitionsComponent},

        ]),
       
    ],
    providers: [
        RecognitionService,   
    ],
})
export class AppModule {
}
