import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighthomeComponent } from './righthome.component';

describe('RighthomeComponent', () => {
  let component: RighthomeComponent;
  let fixture: ComponentFixture<RighthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
