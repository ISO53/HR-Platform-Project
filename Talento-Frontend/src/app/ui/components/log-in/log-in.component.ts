import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    const url = 'http://localhost:8080/user/sign-in';
    this.http.post<any>(url, {email, password}).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}
