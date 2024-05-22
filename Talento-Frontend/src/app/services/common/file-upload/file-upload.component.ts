import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { first, switchMap } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  source_id:any;

  constructor(
    private httpClientService: HttpClient,
    ) {}

  public files: NgxFileDropEntry[];
  @Input() options : Partial<FileUploadOptions>;
  @Output() sendCV : EventEmitter<any> = new EventEmitter();

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData : FormData = new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File) =>{
        fileData.append(_file.name,_file,file.relativePath)
      })
    }
    
    this.httpClientService.post(this.options.url_upload,fileData,{
      headers: new HttpHeaders({
        "x-api-key":"sec_blHXw7Lmh7V40YeXJeuoMWBqjNBhMXep",
      })
    }).pipe(
      switchMap((firstResponse) =>{
        this.source_id=firstResponse;
        console.log("file uploaded succesfully,",firstResponse);
        console.log(firstResponse["sourceId"]);
        
        return this.httpClientService.post(this.options.url_message,{
          "sourceId": this.source_id["sourceId"],
          "messages": [
            {
              "role": "user",
              "content": `name
              surname
              email
              address
              undergraduateEducation
              mastersDegreeOrDoctorate
              dateOfGraduation
              businessExperience
              githubUrl
              githubScore
              skills
              certificates
              languages
              cv_score
              
              add cv_score field in the json and score the cv from 0 to 100. Return json as answer nothing more. skills, certificates and languages must be send as list such as ["SQL",".NET"]`
            }
          ]
        },{
          headers: new HttpHeaders({
            "x-api-key":"sec_blHXw7Lmh7V40YeXJeuoMWBqjNBhMXep",
            "Content-Type": "application/json",
          })
        })
      })
    ).subscribe({
      next : (data) =>{
        const message = "data is got successfully";
        console.log(message);
        console.log(data)
        this.sendCV.emit(data);
        if(this.options.isAdminPage){
            //HR sayfasında başarı

        }else{
            //UI sayfasında başarı

        }
      },
      error: (error:HttpErrorResponse) =>{
        const message = "data is not got or file uploaded successfully";
        console.log(message);
        console.log(error);
        
        if(this.options.isAdminPage){
            //HR sayfasında hata
        }else{
            //UI sayfasında hata
        }
      }
    })

  } 


}
export class FileUploadOptions{
  explanation ?: string;
  accept ?: string;
  isAdminPage ?: boolean = false;
  url_upload ?: string;
  url_message ?: string;

}