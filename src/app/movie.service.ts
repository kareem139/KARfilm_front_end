import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService
{
  url:string="https://localhost:44358/Api/Movies";
  movies:Movie[];
  movie:Movie;


  constructor(private http:HttpClient) { }

  getallMovie()
  {
    this.http.get(this.url).toPromise().then(
      res=>{
        this.movies=res as Movie[]
      }
    )
  }

  addmovie()
  {

    return this.http.post(this.url,this.movie);


  }

  updatemovie()
  {
    return this.http.put(this.url,this.movie.movie_Id)
  }
  deletemovie(movie_Id)
  {
    return this.http.delete(this.url+"/"+movie_Id)
  }


}
