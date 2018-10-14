import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './_services/loaderinterceptor.service';
import {DataCallsService} from "./_services/datacalls.service";
import {User} from "./model/user.model";
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
