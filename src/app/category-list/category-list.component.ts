import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit
{

  constructor(public service:CategoryService) { }

  ngOnInit(): void {
    this.service.getAllCategory();
  }
  fillData(item)
  {
    this.service.category.category_Id=item.category_Id;
    this.service.category.category_Name=item.category_Name;
    this.service.category.isActive=item.isActive;

  }
  deleteCat(category_Id)
  {
      this.service.deleteCategory(category_Id).subscribe(res=>
        {this.service.getAllCategory()})
  }



}
