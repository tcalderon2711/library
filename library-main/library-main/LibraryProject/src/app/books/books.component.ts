import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  title = 'json-read-example';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/books.json').subscribe(response => {
      this.data = response;
      console.log('Data', this.data);
    });
  }
}

//hello