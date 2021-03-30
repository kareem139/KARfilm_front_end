import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMainnavComponent } from './my-mainnav.component';

describe('MyMainnavComponent', () => {
  let component: MyMainnavComponent;
  let fixture: ComponentFixture<MyMainnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMainnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMainnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
