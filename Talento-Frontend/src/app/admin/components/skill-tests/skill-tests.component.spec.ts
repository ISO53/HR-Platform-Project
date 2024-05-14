import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTestsComponent } from './skill-tests.component';

describe('SkillTestsComponent', () => {
  let component: SkillTestsComponent;
  let fixture: ComponentFixture<SkillTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillTestsComponent]
    });
    fixture = TestBed.createComponent(SkillTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
