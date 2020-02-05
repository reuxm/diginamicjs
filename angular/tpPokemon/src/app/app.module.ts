import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PHeaderComponent } from './p-header/p-header.component';
import { PFooterComponent } from './p-footer/p-footer.component';
import { CardComponent } from './card/card.component';
import { DexComponent } from './dex/dex.component';

@NgModule({
  declarations: [
    AppComponent,
    PHeaderComponent,
    PFooterComponent,
    CardComponent,
    DexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
