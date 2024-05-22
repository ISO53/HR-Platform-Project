import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skill-tests',
  templateUrl: './skill-tests.component.html',
  styleUrls: ['./skill-tests.component.scss']
})
export class SkillTestsComponent {
  constructor(private router: Router) {}

  navigateToCreateTest() {
    this.router.navigate(['/admin/skill-test/create']);
  }
}
