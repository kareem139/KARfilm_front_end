import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefthomeComponent } from './lefthome.component';

describe('LefthomeComponent', () => {
  let component: LefthomeComponent;
  let fixture: ComponentFixture<LefthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
