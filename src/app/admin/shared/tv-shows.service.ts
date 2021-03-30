import { ImageService } from './../../shared/image.service';
import { UrlService } from './../../shared/url.service';
import { TvShows } from './models/tv-shows.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  tvshows:TvShows[];
  tvshowswithcat:TvShows[]=[];
  tvshow:TvShows;
  categorynamefromleftnav:string;

  tvshowurl:string=this.urlservice.mainurl+"/api/Tv_Show";
  constructor(private http:HttpClient,private toaster:ToastrService,private urlservice:UrlService,private imgservice:ImageService) { }


  addtvshow(formdata)
  {

    return  this.http.post(this.tvshowurl,formdata);
  }
  gettvshowlist()
  {
    return this.http.get(this.tvshowurl).toPromise().then(res=>
      {
        this.tvshows=res as[];
      })
  }

  delete(id)
  {
    return this.http.delete(this.tvshowurl+"/"+id);
  }

  gettvshowtoepisode()
  {
    return this.http.get(this.tvshowurl);
  }
  gettvswithpic()
  {
    return this.http.get(this.tvshowurl).subscribe(res=>
      {
        this.tvshows=res as [];
        this.tvshows.forEach(e=>
          {
            let url=this.imgservice.imgurlget+e.img;
            this.imgservice.getImage(url).subscribe(res=>
              {
                let reader=new FileReader();
                reader.addEventListener("loadend",()=>
                {
                  e.imgpath=reader.result;

                })
                if (res) {
                  reader.readAsDataURL(res);
                }
              })
          })
      })
  }



  gettvswithcategory(catname)
  {
    return this.http.get(this.tvshowurl).subscribe(res=>
      {
        this.tvshows=res as [];
        this.tvshows.forEach(e=>
          {
            let url=this.imgservice.imgurlget+e.img;
            this.imgservice.getImage(url).subscribe(res=>
              {
                let reader=new FileReader();
                reader.addEventListener("loadend",()=>
                {
                  e.imgpath=reader.result;

                })
                if (res) {
                  reader.readAsDataURL(res);
                }
              })

              if (catname==e.categoryname)
               {
                this.tvshowswithcat.push(e);
              }
          })
      })
  }


  gettvswithsearch(search)
  {
    return this.http.get(this.tvshowurl).subscribe(res=>
      {
        this.tvshows=res as [];
        this.tvshows.forEach(e=>
          {
            let url=this.imgservice.imgurlget+e.img;
            this.imgservice.getImage(url).subscribe(res=>
              {
                let reader=new FileReader();
                reader.addEventListener("loadend",()=>
                {
                  e.imgpath=reader.result;

                })
                if (res) {
                  reader.readAsDataURL(res);
                }
              })

              if (e.name.includes(search)||e.categoryname.includes(search))
               {
                this.tvshowswithcat.push(e);
              }
          })
      })
  }
}
