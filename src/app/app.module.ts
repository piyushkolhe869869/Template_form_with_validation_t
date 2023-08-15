import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';     
import{HttpClientModule}from '@angular/common/http';
import { PanverifyDirective } from './directive/panverify.directive'                                
@NgModule({
  declarations: [
    AppComponent,
    PanverifyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
