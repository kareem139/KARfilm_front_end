import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtvshowComponent } from './addtvshow.component';

describe('AddtvshowComponent', () => {
  let component: AddtvshowComponent;
  let fixture: ComponentFixture<AddtvshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtvshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
