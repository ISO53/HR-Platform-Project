import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpService: HttpClient, @Inject("baseUrl") baseUrl:string) { }
  
  getUrl(){

  }

  get(requestParameters : Partial<RequestParameters>){
    var geturl = "";
    if(!requestParameters.fullUrl){
      
    }
  }

  post(){}

  put(){}
  
  delete(){}
}

export class RequestParameters{
  controller ?: string;
  action ?: string;

  headers ?: HttpHeaders;
  baseUrl ?: string;
  fullUrl ?: string;

}