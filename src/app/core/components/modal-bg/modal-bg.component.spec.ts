import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBgComponent } from './modal-bg.component';

describe('ModalBgComponent', () => {
  let component: ModalBgComponent;
  let fixture: ComponentFixture<ModalBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ModalBgComponent]
});
    fixture = TestBed.createComponent(ModalBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
