import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWithButtonComponent } from './cart-with-button.component';

describe('CartWithButtonComponent', () => {
  let component: CartWithButtonComponent;
  let fixture: ComponentFixture<CartWithButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartWithButtonComponent]
    });
    fixture = TestBed.createComponent(CartWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
