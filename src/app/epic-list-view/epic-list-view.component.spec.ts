import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicListViewComponent } from './epic-list-view.component';

describe('EpicListViewComponent', () => {
  let component: EpicListViewComponent;
  let fixture: ComponentFixture<EpicListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
