import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageSliderComponent } from './product-image-slider.component';

describe('ProductImageSliderComponent', () => {
  let component: ProductImageSliderComponent;
  let fixture: ComponentFixture<ProductImageSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImageSliderComponent]
    });
    fixture = TestBed.createComponent(ProductImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
