import { ImageService } from './../../shared/image.service';
import { UrlService } from './../../shared/url.service';
import { Movie } from './movie.model';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public progress:number;
  public message:string;
  movies:Movie[];
  movieswithcat:Movie[]=[];
  movie:Movie;
  @Output() public onUploadFinished = new EventEmitter();
  movieryurl:string=this.urlservice.mainurl+"/api/Movies";
  public response: {dbPath: ''};
  public uploadFinished = (event) => {
    this.response = event;
  }
  moviewithcat:string;
  showmovlist:string;


  constructor(private http:HttpClient,private fb:FormBuilder,private urlservice:UrlService,private imgservice:ImageService)
  {

  }
  ngOnInit(): void {


  }


  addmovie(formdata)
  {
      return this.http.post(this.movieryurl,formdata);
  }



  addmovpic(formdata:FormData)
  {
   return this.http.post(this.movieryurl+'/upload',formdata,{reportProgress:true,observe:'events'}).subscribe(
     event=>{
          if (event.type==HttpEventType.UploadProgress) {
            console.log('progress : '+(event.loaded/event.total*100)+'%');
          }
          else if (event.type==HttpEventType.Response)

          {
            console.log(event)
          }
     }
   );
  }



    getmovielist()
    {
      return this.http.get(this.movieryurl).toPromise().then(res=>
        {
          this.movies=res as [];

        })

    }

    delmovie(id)
    {
      return this.http.delete(this.movieryurl+'/'+id);
    }


    getmovies()
    {
      return this.http.get(this.movieryurl);
    }

    getmovwithpic()
    {
      return this.http.get(this.movieryurl).subscribe(res=>
        {
          this.movies=res as[];
      this.movies.forEach(e=>
        {
          let url =this.imgservice.imgurlget+e.img;
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
        }) });
    }


    getmovwithcategory(catname)
    {
      return this.http.get(this.movieryurl).subscribe(res=>
        {

          this.movies=res as[];
      this.movies.forEach(e=>
        {

          let url =this.imgservice.imgurlget+e.img;
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
          if (catname==e.categoryname)
          {
           this.movieswithcat.push(e);
          }
        }) });
    }



    getmovwithsearch(search)
    {
      return this.http.get(this.movieryurl).subscribe(res=>
        {

          this.movies=res as[];
      this.movies.forEach(e=>
        {

          let url =this.imgservice.imgurlget+e.img;
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
          if (e.name.includes(search)||e.categoryname.includes(search))
          {
           this.movieswithcat.push(e);
          }
        }) });
    }


}
