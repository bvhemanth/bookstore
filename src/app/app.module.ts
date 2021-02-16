import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { MultifilterPipe } from './pipes/multifilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BookDetailsComponent,
    FilterPipe,
    MultifilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
