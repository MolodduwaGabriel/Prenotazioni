import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrenotazioneViewComponent } from './prenotazione-view/prenotazione-view.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioniComponent,
    PrenotazioneViewComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    FormsModule,ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

