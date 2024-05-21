import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateToJobPosting() {
    this.router.navigate(['/admin/job-posting']);
  }

  navigateToTalentTest() {
    this.router.navigate(['/admin/skill-test']);
  }

  navigateToApplicants() {
    this.router.navigate(['/admin/application']);
  }

  navigateToCalendar() {
    this.router.navigate(['/admin/calendar']);
  }
}
