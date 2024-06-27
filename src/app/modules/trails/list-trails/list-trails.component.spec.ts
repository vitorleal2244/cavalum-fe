import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrailsComponent } from './list-trails.component';

describe('TrailsComponent', () => {
  let component: ListTrailsComponent;
  let fixture: ComponentFixture<ListTrailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListTrailsComponent]
});
    fixture = TestBed.createComponent(ListTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
