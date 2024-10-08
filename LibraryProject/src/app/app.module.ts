import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationsComponent } from './locations/locations.component';
import { HeaderComponent } from './header/header.component';

import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReserveFormComponent } from './reserve-form/reserve-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    EventsComponent,
    AboutUsComponent,
    LocationsComponent,
    HeaderComponent,
    BookinfoComponent,
    SlideshowComponent,
    ReserveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }