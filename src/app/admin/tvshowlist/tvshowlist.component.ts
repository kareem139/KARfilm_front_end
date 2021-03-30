import { ToastrService } from 'ngx-toastr';
import { TvShowsService } from './../shared/tv-shows.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrls: ['./tvshowlist.component.css']
})
export class TvshowlistComponent implements OnInit {

  constructor(public service:TvShowsService,private toaster:ToastrService,private router:Router) { }

  imgurl:string="assets/movie/";

  ngOnInit(): void {
    this.service.gettvswithpic();

  }

  deletetv(id)
  {
    this.service.delete(id).subscribe(res=>
      {
        this.service.gettvshowlist();
        this.toaster.success('delete success');

        this.router.navigateByUrl('/admin/tvshows');
      })
  }


}
