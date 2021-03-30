import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbeddinComponent } from './forbeddin.component';

describe('ForbeddinComponent', () => {
  let component: ForbeddinComponent;
  let fixture: ComponentFixture<ForbeddinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbeddinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbeddinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
