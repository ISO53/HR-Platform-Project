import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {
  adverts: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchAdverts();
  }

  fetchAdverts() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.http.get(`http://localhost:8080/advert/getAll/${user.userId}`).subscribe((response: any[]) => {
      this.adverts = response;
    });
  }

}
