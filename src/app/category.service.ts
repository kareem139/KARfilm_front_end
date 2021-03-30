import { AddCategoryComponent } from './add-category/add-category.component';
import { Category } from './category.model';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export  class CategoryService
{
  url:string="https://localhost:44358/Api/Categories";
  categories:Category[];
  category:Category;

  constructor(private http:HttpClient){}

  getAllCategory()
  {
    this.http.get(this.url).toPromise().then(
      res=>{
        this.categories=res as Category[]
      }
    )
  }

  addCategory() {
   return this.http.post(this.url,this.category);
  }

  updateCategory() {
    return this.http.put(this.url+"/"+this.category.category_Id,this.category);
   }

   deleteCategory(category_Id) {
    return this.http.delete(this.url+"/"+category_Id);
   }

}
