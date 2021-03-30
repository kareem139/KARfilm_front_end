import { ImageService } from './../../shared/image.service';
import { EpisodeService } from './../../admin/shared/episode.service';
import { MovieService } from './../../admin/shared/movie.service';
import { Movie } from './../../admin/shared/movie.model';
import { Component, OnInit } from '@angular/core';
import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';
import { ShowsService } from 'src/app/admin/shared/shows.service';
import { Router } from '@angular/router';
import { Shows } from 'src/app/admin/shared/models/shows.model';
import { TvShows } from 'src/app/admin/shared/models/tv-shows.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  imgurl:string="assets/movie/";
  movies:Movie[];
  episodes:Shows[];
  tvs:TvShows[];
  constructor(public movservice:MovieService,public episservice:ShowsService,public tvservice:TvShowsService,private router:Router,private imgservice:ImageService) { }

  ngOnInit(): void {

      this.movservice.getmovwithpic();
      this.episservice.getepisodeswithpic();
      this.tvservice.gettvswithpic();


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

}
