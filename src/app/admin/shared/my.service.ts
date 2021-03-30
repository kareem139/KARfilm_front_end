import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  searchtext:string;

  constructor() { }

  sea(data)
  {
    this.searchtext=data;
  }
}
