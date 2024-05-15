import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButtonlessComponent } from './cart-buttonless.component';

describe('CartButtonlessComponent', () => {
  let component: CartButtonlessComponent;
  let fixture: ComponentFixture<CartButtonlessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartButtonlessComponent]
    });
    fixture = TestBed.createComponent(CartButtonlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
