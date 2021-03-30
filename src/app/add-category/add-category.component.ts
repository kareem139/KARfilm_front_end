import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit
{

  constructor(public service:CategoryService) { }

  ngOnInit(): void
  {
    this.service.category=
    {
      category_Id:0,
      category_Name:null,
      isActive:true,
      movies:null

    }
  }

 public submit()
  {
    if (this.service.category.category_Id==0)
    {
      this.service.addCategory().subscribe
      (
        res=>{this.service.getAllCategory()}
        ,err=>{console.log(err)}
      )
    }
    else
    {
      this.service.updateCategory().subscribe
      (
        res=>{this.service.getAllCategory()}
        ,err=>{console.log(err)}
      )
    }

  }



}
