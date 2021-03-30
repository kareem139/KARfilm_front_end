import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit
{

  constructor(public service:MovieService,public service2:CategoryService) { }

  ngOnInit(): void
  {
    this.service.movie=
    {
      movie_Id:0,
      movie_Name:null,
      movie_Link:null,
      movie_Picture:null,
      isActive:false,
      category_Id:0,
      category:null

    }
  }

  submit()
  {
    if (this.service.movie.movie_Id==0)
    {
      this.service.addmovie().subscribe(
        res=>{this.service.getallMovie()},
        err=>{console.log(err)}
      )
    }
    else
    {
      this.service.updatemovie().subscribe(
        res=>{this.service.getallMovie()},
        err=>{console.log(err)}
      )
    }
  }


}
