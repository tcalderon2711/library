import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationsComponent } from './locations/locations.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'events', component: EventsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'bookinfo/:bookName', component: BookinfoComponent }, // Parameterized route
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
