import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColorsComponent } from './product-colors.component';

describe('ProductColorsComponent', () => {
  let component: ProductColorsComponent;
  let fixture: ComponentFixture<ProductColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ProductColorsComponent]
});
    fixture = TestBed.createComponent(ProductColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
