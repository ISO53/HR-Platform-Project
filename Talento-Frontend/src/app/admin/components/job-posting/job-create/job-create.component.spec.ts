import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCreateComponent } from './job-create.component';

describe('JobCreateComponent', () => {
  let component: JobCreateComponent;
  let fixture: ComponentFixture<JobCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCreateComponent]
    });
    fixture = TestBed.createComponent(JobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
