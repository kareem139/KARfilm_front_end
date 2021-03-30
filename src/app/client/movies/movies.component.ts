import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/admin/shared/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  imgurl:string="assets/movie/";
  constructor(public movservice:MovieService) { }

  ngOnInit(): void {
  }

}
