import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(public service:MovieService) { }

  ngOnInit(): void {
    this.service.getallMovie()
  }

  deleteMov(movie_Id)
  {
    this.service.deletemovie(movie_Id).subscribe(res=>
      {
        this.service.getallMovie();
      })
  }
  fillData(item)
  {
    this.service.movie.movie_Name=item.movie_Name;
    this.service.movie.movie_Link=item.movie_Link;
    this.service.movie.movie_Picture=item.movie_Picture;
    this.service.movie.isActive=item.isActive;
    this.service.movie.category_Id=item.category_Id;
  }


}
