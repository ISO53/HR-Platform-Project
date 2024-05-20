import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzesComponent } from './analyzes.component';

describe('AnalyzesComponent', () => {
  let component: AnalyzesComponent;
  let fixture: ComponentFixture<AnalyzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyzesComponent]
    });
    fixture = TestBed.createComponent(AnalyzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
