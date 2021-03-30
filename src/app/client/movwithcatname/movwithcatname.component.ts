import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';
import { ShowsService } from 'src/app/admin/shared/shows.service';
import { Shows } from './../../admin/shared/models/shows.model';
import { MovieService } from 'src/app/admin/shared/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movwithcatname',
  templateUrl: './movwithcatname.component.html',
  styleUrls: ['./movwithcatname.component.css']
})
export class MovwithcatnameComponent implements OnInit {

  imgurl:string="assets/movie/";

  constructor(public movservice:MovieService,public episservice:ShowsService, private router:Router,public tvservice:TvShowsService) { }

  ngOnInit(): void {
    this.cleararray();
    this.movservice.getmovwithcategory(this.movservice.moviewithcat);
    this.tvservice.gettvswithcategory(this.tvservice.categorynamefromleftnav);

  }


  getepisodeswithname(name)
  {
    this.episservice.forepisodes=name;

    this.router.navigateByUrl('/home/tvshows');
     /* this.episservice.findepisodes(name).toPromise().then(
        res=>{
          console.log(res);
          this.episservice.episodesbyname=res as [];
          this.router.navigateByUrl('/home/tvshows');
        }
        ,err=>{console.log(err)}
      )*/
  }


    cleararray()
    {
      this.tvservice.tvshowswithcat=[];
      this.movservice.movieswithcat=[];

    }



}
