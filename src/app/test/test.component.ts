import { MovieService } from './../admin/shared/movie.service';
import { ImageService } from './../shared/image.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../admin/shared/movie.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

movie:Movie[];
myfile:any;
  constructor(private http:HttpClient,private imgservice:ImageService,private movservice:MovieService) { }

  ngOnInit(): void {

    this.movservice.getmovies().subscribe(res=>
      {
        this.movie=res as[];
        console.log(this.movie);
        this.movie.forEach(e=>
          {

            console.log(e.img)
            let url ="https://localhost:44388/images/"+e.img;
            console.log(url)

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



            console.log( e.imgpath)



          })
      })


  }



/*

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () =>
   {
      this.movie.forEach(e=>{
        e.imgpath=reader.result;
      })
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}


getimgbyme(url)
{
  this.imgservice.getImage(url).subscribe(
    res=>
    {
      let reader=new FileReader();
      reader.addEventListener("loadend",()=>
      {
        this.myfile=reader.result;
      })
      if (res) {
        reader.readAsDataURL(res);
      }
    }
  )
}


getImageFromService(url) {

  this.imgservice.getImage(url).subscribe(data => {
    this.createImageFromBlob(data);

  }, error => {

    console.log(error);
  });
}
*/

}
