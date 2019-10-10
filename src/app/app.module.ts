import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { getPositionReducer } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ position: getPositionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
