import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoModule } from './jogo/jogo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    JogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
