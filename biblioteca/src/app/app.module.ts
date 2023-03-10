import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrosComponent } from './registros/registros.component';
import { RegistrosServices } from './registros/registros.service';
import { MaterialModule } from 'src/material-models';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    RegistrosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
