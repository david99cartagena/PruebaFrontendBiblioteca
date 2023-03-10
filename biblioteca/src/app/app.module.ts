import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrosComponent } from './registros/registros.component';
import { RegistrosServices } from './registros/registros.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RegistrosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
