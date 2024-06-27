import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrailComponent } from './detail-trail.component';

describe('DetailTrailComponent', () => {
  let component: DetailTrailComponent;
  let fixture: ComponentFixture<DetailTrailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DetailTrailComponent]
});
    fixture = TestBed.createComponent(DetailTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
