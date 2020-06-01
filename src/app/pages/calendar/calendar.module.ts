import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { AngularFireModule } from '@angular/fire';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    AngularFireModule,
  ],
 
})
export class CalendarPageModule {
  
  }

