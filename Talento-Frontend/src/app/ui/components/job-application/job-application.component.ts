import { HttpClient } from '@angular/common/http';
import { Component, Output,inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})



export class JobApplicationComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: any[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  certificates: any[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  languages: any[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  announcer = inject(LiveAnnouncer);

  job: any;
  @Output() fileUploadOptions: Partial<FileUploadOptions> ={
    explanation:"Üşendin mi? Özgeçmişini yüklemeye ne dersin?",
    isAdminPage:true,
    accept:".pdf",
    url_upload:"https://api.chatpdf.com/v1/sources/add-file",
    url_message:"https://api.chatpdf.com/v1/chats/message"
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:8080/advert/getDetailed/' + id).subscribe(response => {
      this.job = response;
    });
    console.log(this.fileUploadOptions.explanation,this.fileUploadOptions.accept,this.fileUploadOptions.isAdminPage)
  }

  add(selectedSection ,event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      if(selectedSection ==0){
        this.skills.push({name: value});

      }else if(selectedSection ==1){
        this.certificates.push({name: value});

      }else{
        this.languages.push({name: value});

      }
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(selectedSection,fruit: any): void {
    if(selectedSection ==0){
      const index = this.skills.indexOf(fruit);

      if (index >= 0) {
        this.skills.splice(index, 1);
  
        this.announcer.announce(`Removed ${fruit}`);
      }

    }else if(selectedSection ==1){
      const index = this.skills.indexOf(fruit);

      if (index >= 0) {
        this.certificates.splice(index, 1);
  
        this.announcer.announce(`Removed ${fruit}`);
      }
    }else{
      const index = this.skills.indexOf(fruit);

      if (index >= 0) {
        this.languages.splice(index, 1);
  
        this.announcer.announce(`Removed ${fruit}`);
      }
    }

  }

  edit(selectedSection,fruit: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(selectedSection,fruit);
      return;
    }

    // Edit existing fruit
    if(selectedSection ==0){
    const index = this.skills.indexOf(fruit);
    if (index >= 0) {
      this.skills[index].name = value;
    }
  }else if(selectedSection ==1){
    const index = this.certificates.indexOf(fruit);
    if (index >= 0) {
      this.certificates[index].name = value;
    }
    }else{
      const index = this.languages.indexOf(fruit);
      if (index >= 0) {
        this.languages[index].name = value;
      }
    }
  }
}
