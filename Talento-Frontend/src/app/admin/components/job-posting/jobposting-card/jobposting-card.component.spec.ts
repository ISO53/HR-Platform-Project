import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostingCardComponent } from './jobposting-card.component';

describe('JobpostingCardComponent', () => {
  let component: JobpostingCardComponent;
  let fixture: ComponentFixture<JobpostingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostingCardComponent]
    });
    fixture = TestBed.createComponent(JobpostingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
