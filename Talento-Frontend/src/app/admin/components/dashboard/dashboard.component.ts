import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private http: HttpClient) {
    this.fetchApplications();
    this.fetchAdverts();
  }

  data: any = {cvScore: [], name: []};
  adverts: any = {uploadDate: [], count: []};

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

  fetchAdverts() {
    this.http.get("http://localhost:8080/advert/getAll").subscribe((response: any[]) => {
      const dateCounts = response.reduce((acc, curr) => {
        const date = new Date(curr.uploadDate).toDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      this.adverts.uploadDate = Object.keys(dateCounts);
      this.adverts.count = Object.values(dateCounts);
    });
  }

}
