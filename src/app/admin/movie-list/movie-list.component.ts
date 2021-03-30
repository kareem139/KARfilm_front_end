import { element } from 'protractor';
import { Movie } from './../shared/movie.model';
import { HttpClient } from '@angular/common/http';
import { ImageService } from './../../shared/image.service';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './../shared/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  imgurl:string;
  imgl:string="https://localhost:44388/images/";
  imgname:string;
  movies:Movie[];


  constructor(private fb:FormBuilder,public service:MovieService,private router:Router,
    private toaster:ToastrService,private sanitizer:DomSanitizer,public imgservice:ImageService,private http:HttpClient) { }

  ngOnInit(): void
  {
    this.service.getmovwithpic();





  }
        movieform= this.fb.group({
          name:[''],
          img:[''],
          url:[''],
          categoryname:[''],
          isActive:[false]
      })

      deletemov(id)
      {
          this.service.delmovie(id).subscribe(res=>
            {
              this.service.getmovielist();
              this.router.navigateByUrl('/admin/movies');
              this.toaster.success('delete success');
            })
      }

      fillData(item)
      {
          this.service.movie.id=item.id;
          this.service.movie.name=item.name;
          this.service.movie.img=item.img;
          this.service.movie.isActive=item.isActive;
          this.service.movie.categoryname=item.categoryname;

      }


      imageToShow:any ;

      createImageFromBlob(image: Blob) {
         let reader = new FileReader();
         reader.addEventListener("load", () => {
            this.imageToShow = reader.result   ;
         }, false);

         if (image) {
            reader.readAsDataURL(image);
         }
      }

      isImageLoading:boolean;
      getImageFromService(imgurl) {
        this.isImageLoading = true;
        this.imgservice.getImage(imgurl).subscribe(data => {
          this.createImageFromBlob(data);
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
          console.log(error);
        });
      }






}
