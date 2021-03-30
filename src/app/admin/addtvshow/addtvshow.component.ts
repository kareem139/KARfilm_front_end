import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../shared/movie.service';
import { CategoryService } from './../shared/category.service';
import { TvShowsService } from './../shared/tv-shows.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtvshow',
  templateUrl: './addtvshow.component.html',
  styleUrls: ['./addtvshow.component.css']
})
export class AddtvshowComponent implements OnInit {

  catlist:[];
  tvshowForm:FormArray=this.fb.array([]);

  constructor(private http:HttpClient,public service:TvShowsService,
    public catservice:CategoryService,private picservice:MovieService,
    private toaster:ToastrService,private fb:FormBuilder,private router:Router ) { }

  ngOnInit(): void {



    this.catservice.getcategorylistformov().subscribe(res=>
      {
        this.catlist=res as[];
      });

      this.addtvform();
  }

  addtvform()
  {
    this.tvshowForm.push(this.fb.group({
      id:[0],
      name:["",Validators.required],
      img:[null,Validators.required],
      isActive:[false,Validators.required],
      categoryname:["",Validators.required]

    }));
  }

  submit(fg:FormGroup)
  {
    const fd=new FormData();
    fd.append('image',this.img);
    this.picservice.addmovpic(fd);

    fg.value.img=this.img.name;
    this.service.addtvshow(fg.value).subscribe(
      res=>{
        this.toaster.success('add movie success');
        this.router.navigateByUrl('/admin/tvshows');
      },err=>{console.log(err)}
    )
  }
  img:File;
  handlefile(event:any)
  {
      if (event.target.files!=null&&event.target.files.length>0)
      {
            this.img=event.target.files[0];
            const reader=new FileReader();
            reader.onload=function(e)
            {
              $('#img').attr('src',e.target.result.toString());
            }
            reader.readAsDataURL(this.img);
      }
      else
      {
        this.img=null;
        $('img').attr('src',"assets/anonymous.jfif")
      }
  }



}
