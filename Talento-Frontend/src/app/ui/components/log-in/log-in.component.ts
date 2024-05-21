import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    const url = 'http://localhost:8080/user/sign-in';
    console.log(email + " " + password);
    this.http.post<any>(url, {email: email, password: password}).subscribe(response => {
      console.log(response);
      // Store the response data in localStorage
      localStorage.setItem('user', JSON.stringify(response));
      this.snackBar.open('Login successful', 'Close', {
        duration: 2000,
      });
    }, error => {
      console.error(error);
      this.snackBar.open('Login failed. ' + error.error.toString(), 'Close', {
        duration: 2000,
      });
    });
  }
}
