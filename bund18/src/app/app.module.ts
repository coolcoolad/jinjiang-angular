import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { RecordService, RemoteControlService } from './_services';
import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  declarations: [
    AppComponent,
    Bund18Component,
    Bund18recordComponent,
  ],  
  providers: [
    RecordService,
    RemoteControlService,
    { provide: LOCALE_ID, useValue: 'zh-Hans'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
