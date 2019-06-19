import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';

import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { RecordService } from './_services';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { HintComponent } from './hint/hint.component';
import { SelectComponent } from './select/select.component';
import { DisplayComponent } from './display/display.component';
import { ShareComponent } from './share/share.component';
import { EndComponent } from './end/end.component';
import { ShareCardComponent } from './shareCard/shareCard.component';
import { AllImageComponent } from './allImage/allImage.component';

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
    WelcomeComponent,
    StartComponent,
    HintComponent,
    SelectComponent,
    DisplayComponent,
    ShareComponent,
    EndComponent,
    ShareCardComponent,
    AllImageComponent
  ],  
  providers: [
    RecordService,
    { provide: LOCALE_ID, useValue: 'zh-Hans'},
    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
