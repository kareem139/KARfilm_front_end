import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/admin/shared/movie.service';
import { CategoryService } from './../../admin/shared/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/admin/shared/category.model';
import { Router } from '@angular/router';
import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';

@Component({
  selector: 'app-righthome',
  templateUrl: './righthome.component.html',
  styleUrls: ['./righthome.component.css']
})
export class RighthomeComponent implements OnInit {

  like=100;
  dislike=25;
  catlist:Category[];



  constructor(public catservice:CategoryService,public movservice:MovieService,private router:Router,public tvservice:TvShowsService,private http:HttpClient) { }

  ngOnInit(): void {
    this.catservice.getcategorylistformov().toPromise().then(res=>
      {
          this.catlist=res as[];
      })
  }


  getmoviewithcat(name)
  {
      this.movservice.moviewithcat=name;
      this.tvservice.categorynamefromleftnav=name;

      this.router.navigateByUrl('/home/movwithcat');
  }

  showmovlist()
  {
    this.router.navigateByUrl('/home/movlist')
  }

  showtvlist()
  {
    this.router.navigateByUrl('/home/tvshows')
  }


}
