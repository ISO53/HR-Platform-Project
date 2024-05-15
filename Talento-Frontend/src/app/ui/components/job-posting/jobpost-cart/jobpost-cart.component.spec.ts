import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostCartComponent } from './jobpost-cart.component';

describe('JobpostCartComponent', () => {
  let component: JobpostCartComponent;
  let fixture: ComponentFixture<JobpostCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostCartComponent]
    });
    fixture = TestBed.createComponent(JobpostCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
