import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPage } from './pages/calendar/calendar.page';


import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/firestore"


@NgModule({
    declarations: [
        AppComponent,
        CalendarPage
         ],
  entryComponents: [
    AppComponent, CalendarPage,
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
   AppRoutingModule,
  NgCalendarModule,
  AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    AngularFirestoreModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
