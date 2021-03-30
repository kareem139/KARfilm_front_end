import { MyService } from './../../admin/shared/my.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/admin/shared/movie.service';
import { ShowsService } from 'src/app/admin/shared/shows.service';
import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  imgurl:string="assets/movie/";

  constructor(public movservice:MovieService,public episservice:ShowsService,public tvservice:TvShowsService,private router:Router,public myservice:MyService) { }

  ngOnInit(): void {
    this.cleararray();
   this.episservice.getepisodeswithsearch(this.episservice.predict);
   this.movservice.getmovwithsearch(this.movservice.moviewithcat);
   this.tvservice.gettvswithsearch(this.tvservice.categorynamefromleftnav);
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
    this.episservice.episodeswithpredict=[];
  }

}
