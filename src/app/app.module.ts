import { VatCalcModule } from './vat-calc/vat-calc.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VatCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
