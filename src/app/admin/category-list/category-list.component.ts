import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(public service:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.service.getcategorylist();
  }

  deleteCat(id)
  {
    this.service.deletecat(id).subscribe(res=>
      {
        this.service.getcategorylist();
        this.router.navigateByUrl('/admin/categories');
      },err=>{
        console.log(err);
      })
  }

  fillData(item)
  {
    this.service.category.id=item.id;
    this.service.category.name=item.name;
    this.service.category.isActive=item.isActive;

  }

}
