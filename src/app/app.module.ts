import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DataService} from './data.service';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
