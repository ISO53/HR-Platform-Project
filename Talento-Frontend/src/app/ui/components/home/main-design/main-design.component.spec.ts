import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDesignComponent } from './main-design.component';

describe('MainDesignComponent', () => {
  let component: MainDesignComponent;
  let fixture: ComponentFixture<MainDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDesignComponent]
    });
    fixture = TestBed.createComponent(MainDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
