import { UrlService } from './../../shared/url.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[];
  category:Category;
  categoryurl:string=this.urlservice.mainurl+"/api/Categories";

  constructor(private http:HttpClient,private urlservice:UrlService) { }

  addcategory(formdata)
  {
   return this.http.post(this.categoryurl,formdata)
  }

  getcategorylistformov()
  {
    return this.http.get(this.categoryurl);


  }

  getcategorylist()
  {
    return this.http.get(this.categoryurl).toPromise().then(res=>{
      this.categories=res as []
    })
  }

  deletecat(id)
  {
     return this.http.delete(this.categoryurl+'/'+id);
  }

  updatecat()
  {
   return this.http.put(this.categoryurl+'/'+this.category.id,this.category);
  }
}
