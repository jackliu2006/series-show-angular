import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListViewComponent } from './series-list-view.component';

describe('SeriesListViewComponent', () => {
  let component: SeriesListViewComponent;
  let fixture: ComponentFixture<SeriesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
