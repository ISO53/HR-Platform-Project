import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(
    private httpClientService: HttpClient,
    ) {}

  public files: NgxFileDropEntry[];
  @Input() options : Partial<FileUploadOptions>;
  @Input() url;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData : FormData = new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File) =>{
        fileData.append(_file.name,_file,file.relativePath)
      })
    }
    
    this.httpClientService.post(this.url,fileData,{
      headers: new HttpHeaders({"responseType":"blob"})
    }).subscribe({
      next : (data) =>{
        const message = "File is uploaded successfully";
        console.log(data)
        console.log(message);
        
        if(this.options.isAdminPage){
            //HR sayfasında başarı

        }else{
            //UI sayfasında başarı

        }
      },
      error: (error:HttpErrorResponse) =>{
        const message = "File is not uploaded successfully";
        
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

}