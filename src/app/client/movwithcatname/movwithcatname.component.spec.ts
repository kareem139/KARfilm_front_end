import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovwithcatnameComponent } from './movwithcatname.component';

describe('MovwithcatnameComponent', () => {
  let component: MovwithcatnameComponent;
  let fixture: ComponentFixture<MovwithcatnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovwithcatnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovwithcatnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
