import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddepisodeComponent } from './addepisode.component';

describe('AddepisodeComponent', () => {
  let component: AddepisodeComponent;
  let fixture: ComponentFixture<AddepisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddepisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddepisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
