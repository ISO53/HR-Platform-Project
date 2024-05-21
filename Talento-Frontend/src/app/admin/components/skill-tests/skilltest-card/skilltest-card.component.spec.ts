import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltestCardComponent } from './skilltest-card.component';

describe('SkilltestCardComponent', () => {
  let component: SkilltestCardComponent;
  let fixture: ComponentFixture<SkilltestCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkilltestCardComponent]
    });
    fixture = TestBed.createComponent(SkilltestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
