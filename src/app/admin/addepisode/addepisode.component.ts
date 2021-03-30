import { MovieService } from './../shared/movie.service';
import { ToastrService } from 'ngx-toastr';
import { ShowsService } from './../shared/shows.service';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../shared/tv-shows.service';
import { Router } from '@angular/router';
import { right } from '@popperjs/core';

@Component({
  selector: 'app-addepisode',
  templateUrl: './addepisode.component.html',
  styleUrls: ['./addepisode.component.css']
})
export class AddepisodeComponent implements OnInit {

  episodeform:FormArray=this.fb.array([]);
  tvshowlist:[];

  constructor(private fb:FormBuilder,public service:ShowsService,
    public tvshowservice:TvShowsService,private toaster:ToastrService,
    private router:Router,private picservice:MovieService) { }

  ngOnInit(): void {

    this.tvshowservice.gettvshowtoepisode().toPromise().then(res=>
      {
          this.tvshowlist=res as [];
      })

    this.addepisideform();
  }

  addepisideform()
  {
    this.episodeform.push(this.fb.group({
      id:[0],

      isActive:[false,Validators.required],
      tvshowname:["",Validators.required],
      url:["",Validators.required],
      img:[null,Validators.required],
      episode:[0,Validators.required]
    }))
  }

  submit(fg:FormGroup)
  {
    const fd=new FormData();
    fd.append('image',this.img);
    this.picservice.addmovpic(fd);

      fg.value.img=this.img.name;

   this.service.addepisode(fg.value).subscribe(res=>
    {
      this.service.getepisodelist();
      this.toaster.success('success add');
      this.router.navigateByUrl('/admin/episodes');
    })
  }

  img:File;
  handlefiles(event:any)
  {
    if (event.target.files!=null&&event.target.files.length>0)
    {
      this.img=event.target.files[0];

      const reader=new FileReader();
      reader.onload=function(e)

      {

        $('#me').attr('src',e.target.result.toString());
      }
      reader.readAsDataURL(this.img);
    }
    else
    {
      this.img=null;
      $('#me').attr('src',"assets/r.png");
    }

  }



}
