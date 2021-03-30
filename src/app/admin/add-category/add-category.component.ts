import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../shared/category.service';
import { Form, FormArray, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm:FormArray=this.fb.array([]);
  constructor(private fb:FormBuilder,public service:CategoryService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {

    this.addcategoryform();
    this.service.category=
    {
      id:0,
      name:null,
      isActive:true,


    }

  }
  addcategoryform()
  {
    this.categoryForm.push(this.fb.group({
      id:[0],
      name:['',Validators.required],
      isActive:[false,Validators.required]
    }));
  }
  submit(fg:FormGroup)
  {
    if (this.service.category.id==0) {
      this.service.addcategory(fg.value).subscribe(res=>{
        console.log(res);
        this.toaster.success('cat add success');
        this.router.navigateByUrl('/admin/categories');

    },err=>{console.log(err)})
    }
    else
    {
      this.service.updatecat().subscribe(res=>
        {
          this.service.getcategorylist();
          this.router.navigateByUrl('/admin/categories');
        })
    }

  }

}
