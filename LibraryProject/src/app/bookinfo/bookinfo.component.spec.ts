import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinfoComponent } from './bookinfo.component';

describe('BookinfoComponent', () => {
  let component: BookinfoComponent;
  let fixture: ComponentFixture<BookinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookinfoComponent]
    });
    fixture = TestBed.createComponent(BookinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
