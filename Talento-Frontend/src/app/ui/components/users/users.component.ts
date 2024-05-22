import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  data: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:8080/users/' + id).subscribe(response => {
      this.data = response;
    });
  }

  updateProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put('http://localhost:8080/users/' + id, this.data).subscribe(response => {
      console.log('Profile updated successfully');
    }, error => {
      console.error('Error updating profile', error);
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.data.profilePictureUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
