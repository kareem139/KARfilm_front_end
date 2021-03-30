import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imgurlget:string="http://karfilmapi.somee.com/images/";


  constructor(private http:HttpClient,private sanitizer:DomSanitizer) { }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }







}
