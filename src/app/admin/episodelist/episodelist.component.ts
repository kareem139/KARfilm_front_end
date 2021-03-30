import { ToastrService } from 'ngx-toastr';
import { ShowsService } from './../shared/shows.service';
import { Component, OnInit } from '@angular/core';
import { Shows } from '../shared/models/shows.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodelist',
  templateUrl: './episodelist.component.html',
  styleUrls: ['./episodelist.component.css']
})
export class EpisodelistComponent implements OnInit {

  imgurl:string="assets/movie/";

  constructor(public service:ShowsService,private toaster:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.service.getepisodeswithpic();

  }

  deleteepis(id)
  {
    this.service.deleteepis(id).subscribe(res=>
      {
        this.service.getepisodelist();
        this.toaster.success('delete success');

      })
  }




}
