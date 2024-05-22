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
  
  skills: any[] = [{name: 'Örnek'}];
  certificates: any[] = [];
  languages: any[] = [];
  name: string="";
  surname:string="";
  address:string="";
  email:string="";
  undergrade:string="";
  mastergrade:string="";
  graduateDateUnder:string ="";
  graduateDateMaster:string="";
  github:string="";
  cvscore:string ="";
  businessExperience:any ="";

  announcer = inject(LiveAnnouncer);

  job: any;
  @Output() fileUploadOptions: Partial<FileUploadOptions> ={
    explanation:"Üşendin mi? Özgeçmişini yüklemeye ne dersin?",
    isAdminPage:true,
    accept:".pdf",
    url_upload:"https://api.chatpdf.com/v1/sources/add-file",
    url_message:"https://api.chatpdf.com/v1/chats/message"
  };

  constructor(private router: Router,private route: ActivatedRoute, private http: HttpClient) {
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
    console.log(this.name);
    console.log(this.surname);
    
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
  updateCV(event){
    console.log("veri geldi")
    console.log(event["content"]);
    event = JSON.parse(event["content"])
    this.name = event.name;
    this.surname = event.surname;
    this.email=event.email;
    this.github=event.githubUrl;
    this.address = event.address;
    this.undergrade = event.undergraduateEducation;
    this.mastergrade= event.mastersDegreeOrDoctorate;
    this.graduateDateMaster = event.dateOfGraduation;
    this.graduateDateUnder = event.dateOfGraduation;
    this.cvscore = event.cv_score;
    this.businessExperience = event.businessExperience;
    console.log(event.name);
    console.log(event["name"]);

    this.skills =[]
    this.languages = []
    this.certificates = []
    for(let element of event.skills){
      this.skills.push({name:element});
    }
    for(let element of event.languages){
      this.languages.push({name:element});
    }
    for(let element of event.certificates){
      this.certificates.push({name:element});
    }
    if(!Array.isArray(this.businessExperience) ){
      this.businessExperience = this.businessExperience.split(",");
    }
  }
  postApplication(){
    console.log(JSON.parse(localStorage["user"])["userId"]);
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.businessExperience);
    const languagesArr = []
    const certificatesArr = []
    const skillsArr = []
    const expericence =[]
    for(let element of this.languages){
      languagesArr.push(element["name"]);
    }
    for(let element of this.certificates){
      certificatesArr.push(element["name"]);
    } 
    for(let element of this.skills){
      skillsArr.push(element["name"]);
    }
    if(typeof this.businessExperience[0] === "object"){
      for(let element of this.businessExperience){
        expericence.push(element["title"]);
      }
      this.businessExperience=expericence;
    }

   const data = {
    "advertID": this.route.snapshot.paramMap.get('id'),
    "userID": JSON.parse(localStorage["user"])["userId"],
    "name": this.name,
    "surname": this.surname,
    "email": this.email,
    "address": this.address,
    "undergraduateEducation": this.undergrade,
    "mastersDegreeOrDoctorate": this.mastergrade,
    "dateOfGraduation": this.graduateDateUnder,
    "businessExperience": this.businessExperience,
    "githubUrl": this.github,
    "skills": skillsArr,
    "certificates": certificatesArr,
    "languages": languagesArr,
    "cvScore" : this.cvscore
   };
   console.log(data);

    const url ="http://localhost:8080/application/create";
    this.http.post<any>(url,data).subscribe({
      next: (data) =>{
        console.log("basarili");
        
        
      },
      error: (message) =>{
          console.log("hatali")
      }
    });
    this.router.navigate(['/']);
  }
}
