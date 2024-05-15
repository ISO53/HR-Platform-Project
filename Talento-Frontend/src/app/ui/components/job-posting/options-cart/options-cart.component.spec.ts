import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCartComponent } from './options-cart.component';

describe('OptionsCartComponent', () => {
  let component: OptionsCartComponent;
  let fixture: ComponentFixture<OptionsCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsCartComponent]
    });
    fixture = TestBed.createComponent(OptionsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
