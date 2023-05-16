import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeClientComponent } from './modules/liste-client/liste-client.component';
import { ListeDetailClientComponent } from './modules/liste-detail-client/liste-detail-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeClientComponent,
    ListeDetailClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
