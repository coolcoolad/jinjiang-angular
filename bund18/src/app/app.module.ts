import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { RecordService } from './_services';
import { Bund18Component } from './bund18/bund18.component';
import { Bund18recordComponent } from './bund18record/bund18record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgxEchartsModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  declarations: [
    AppComponent,
    Bund18Component,
    Bund18recordComponent,
    WelcomeComponent,
    StartComponent,
    HintComponent,
    DisplayComponent,
    ShareComponent,
  ],  
  providers: [
    RecordService,
    { provide: LOCALE_ID, useValue: 'zh-Hans'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
