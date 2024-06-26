import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  job: any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:8080/advert/getDetailed/' + id).subscribe(response => {
      this.job = response;
    });
  }
  getApplication(){
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/job-application/'+id]);

  }
}
