import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DetailsComponent} from './details/details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubInputComponent} from './sub-input/sub-input.component';
import {DetailsService} from './details/details.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    SubInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
