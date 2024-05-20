import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router : Router) {
  }

  ngOnInit(): void {
  }

  signUp(fullName: string, email: string, password: string): void {
    const url = 'http://localhost:8080/user/sign-up';
    this.http.post<any>(url, {
      fullName,
      email,
      password
    }).subscribe(response => {
      console.log(response);
      this.snackBar.open('Sign up successful', 'Close', {
        duration: 2000,
      });
      this.router.navigate(['/log-in']); // navigate to login page
    }, error => {
      console.error(error);
      this.snackBar.open('Sign up failed. ' + error.error.toString(), 'Close', {
        duration: 2000,
      });
    });
  }
}
