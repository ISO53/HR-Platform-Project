import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})
export class JobPostingComponent implements OnInit {
  adverts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/advert/getAllDetailed').subscribe(response => {
      this.adverts = response;
    });
  }

}
