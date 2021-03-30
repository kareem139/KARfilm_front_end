import { Shows } from './../../admin/shared/models/shows.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/admin/shared/shows.service';
import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';
import { Router } from '@angular/router';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-tvlist',
  templateUrl: './tvlist.component.html',
  styleUrls: ['./tvlist.component.css']
})
export class TvlistComponent implements OnInit {

  lala:Shows[];
  episodesbyname:Shows[];

  imgurl:string="assets/movie/";

  constructor(public service:ShowsService,public tvservice:TvShowsService,public episservice:ShowsService,private router:Router) { }

  ngOnInit(): void {




  }


  getepisodeswithname(name)
  {
    this.episservice.forepisodes=name;

    this.router.navigateByUrl('/home/tvshows');
  }





}
