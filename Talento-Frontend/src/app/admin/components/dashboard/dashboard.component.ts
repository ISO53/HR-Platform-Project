import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private http: HttpClient) {
    this.fetchApplications();
  }

  data: any = { cvScore: [], name: [] };

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

  fetchApplications() {
    this.http.get("http://localhost:8080/application/getAllSimple").subscribe((response: any[]) => {
      const sortedApplications = response.sort((a, b) => b.cvScore - a.cvScore).slice(0, 5);
      this.data.name = sortedApplications.map(app => app.applicantNameSurname);
      this.data.cvScore = sortedApplications.map(app => app.cvScore);
    });
  }

}
