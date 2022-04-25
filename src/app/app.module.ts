import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { HomeupdateComponent } from './homeupdate/homeupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeinfoComponent,
    HomeupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
