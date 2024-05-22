import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  applications: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchApplications();
  }

  fetchApplications() {
    const userID = localStorage.getItem('user');
    this.http.get("http://localhost:8080/application/getAllSimple").subscribe((response: any[]) => {
      console.log(response);
      this.applications = response;
    });
  }
}
