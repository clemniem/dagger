import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaggerComponent } from './tagger/tagger.component';
import { HeaderComponent } from './header/header.component';
import { TargetComponent } from './tagger/target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    TaggerComponent,
    HeaderComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
