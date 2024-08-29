import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.scss']
})
export class BookinfoComponent implements OnInit {
  bookName: string = '';
  book: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookName = this.route.snapshot.paramMap.get('bookName') || '';

    this.http.get<any[]>('/assets/books.json').subscribe(data => {
      this.book = data.find(b => b.bookName === this.bookName);
      console.log('Book Info', this.book);
    });
  }

  goBack(): void {
    this.router.navigate(['/books']); // Navigate back to the books list
  }
}
