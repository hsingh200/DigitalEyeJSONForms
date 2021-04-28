import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DemoMaterialModule} from '../material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'
import { RxTranslateModule } from '@rxweb/translate';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    RxReactiveDynamicFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
