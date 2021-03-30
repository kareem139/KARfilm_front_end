import { TvShows } from 'src/app/admin/shared/models/tv-shows.model';
import { ImageService } from './../../shared/image.service';
import { UrlService } from './../../shared/url.service';
import { HttpClient } from '@angular/common/http';
import { Shows } from './models/shows.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  showurl:string=this.urlservice.mainurl+"/api/Shows";
  episodes:Shows[];
  episodesbyname:Shows[];
  forepisodes:string;
  episodeswithpredict:Shows[]=[];
  predict:string;

  constructor(private http:HttpClient,private urlservice:UrlService,private imgservice:ImageService) { }


  addepisode(formdata)
  {
    return this.http.post(this.showurl,formdata)
  }

  getepisodelist()
  {
    return this.http.get(this.showurl).toPromise().then(
      res=>{this.episodes=res as [];}
    )
  }

  deleteepis(id)
  {
      return this.http.delete(this.showurl+"/"+id)
  }

  getepisodesbyname()
  {
    return this.http.get(this.showurl);
  }

  getepisodeswithpic()
  {
    return this.http.get(this.showurl).subscribe(res=>
      {
        this.episodes=res as [];
        this.episodes.forEach(e=>
          {
            let url=this.imgservice.imgurlget+e.img;
            this.imgservice.getImage(url).subscribe(
              res=>
              {
                let reader=new FileReader();
                reader.addEventListener("loadend",()=>
                {
                  e.imgpath=reader.result;
                })
                if (res) {
                  reader.readAsDataURL(res);
                }
              }
            )

          })
      });
  }


  getepisodeswithsearch(search)
  {
    return this.http.get(this.showurl).subscribe(res=>
      {
        this.episodes=res as [];
        this.episodes.forEach(e=>
          {
            let url=this.imgservice.imgurlget+e.img;
            this.imgservice.getImage(url).subscribe(
              res=>
              {
                let reader=new FileReader();
                reader.addEventListener("loadend",()=>
                {
                  e.imgpath=reader.result;
                })
                if (res) {
                  reader.readAsDataURL(res);
                }
              }
            )
            if (e.tvshowname.includes(search)||e.episode==search)
            {
                this.episodeswithpredict.push(e);
            }
          })
      });
  }


}
