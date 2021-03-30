import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../shared/movie.service';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieForm:FormArray=this.fb.array([]);
  catlist:[];
  imgurl:any;
  constructor(private fb:FormBuilder,private catservive:CategoryService,
    public service:MovieService,private router:Router,private toaster:ToastrService,private http:HttpClient) { }

  ngOnInit(): void
  {



    this.catservive.getcategorylistformov().subscribe(
      res=>{this.catlist=res as  []}
    )
    this.addmovieForm();
  }

  addmovieForm()
  {
    this.movieForm.push(this.fb.group({
      id:[0],
      name:['',Validators.required],
      img:[null,Validators.required],
      url:['',Validators.required],
      isActive:[false,Validators.required],
      categoryname:['',Validators.required]
    }));

  }

  submit(fg:FormGroup)
  {
    const fd=new FormData();
    fd.append('image',this.img);
    this.service.addmovpic(fd);

      fg.value.img=this.img.name;
    this.service.addmovie(fg.value).subscribe(
      res=>{


        this.toaster.success('add movie success');
        this.router.navigateByUrl('/admin/movies');
      }
    );
    this.service.getmovielist();
  }
  img:File;
  handlefiles(event:any)
  {
    if (event.target.files!=null&&event.target.files.length>0)
    {
      this.img=event.target.files[0];

      const reader=new FileReader();
      reader.onload=function(e)

      {

        $('#me').attr('src',e.target.result.toString());
      }
      reader.readAsDataURL(this.img);
    }
    else
    {
      this.img=null;
      $('#me').attr('src',"assets/r.png");
    }

  }






}
