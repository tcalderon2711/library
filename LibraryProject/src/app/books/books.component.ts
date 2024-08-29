import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  title = 'Library Books';
  data: any;

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  ngOnInit() {
    this.http.get<any[]>('/assets/books.json').subscribe(response => {
      this.data = response;
      console.log('Data', this.data);
    });
  }

  viewBook(bookName: string): void {
    this.router.navigate([`/bookinfo`, bookName]); // Navigate to BookinfoComponent with bookName parameter
  }
}
