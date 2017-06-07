import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MaterialModule,
  MdSidenavModule,
  MdTabsModule,
  MdButtonModule,
  MdToolbarModule,
  MdCardModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { TjansterComponent } from './tjanster/tjanster.component';
import { UppdragComponent } from './uppdrag/uppdrag.component';
import { IntresseComponent } from './intresse/intresse.component';
import { KonsulterComponent } from './konsulter/konsulter.component';
import { AboutComponent } from './about/about.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    TjansterComponent,
    UppdragComponent,
    IntresseComponent,
    KonsulterComponent,
    AboutComponent,
    KontaktComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
