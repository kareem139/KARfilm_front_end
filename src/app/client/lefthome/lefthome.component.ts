import { ImageService } from './../../shared/image.service';
import { Movie } from './../../admin/shared/movie.model';
import { MovieService } from 'src/app/admin/shared/movie.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Navigation ,Pagination,Autoplay,SwiperOptions} from 'swiper';
import { style } from '@angular/animations';
import { NguCarouselConfig } from '@ngu/carousel';
import {SlideshowModule} from 'ng-simple-slideshow';


@Component({
  selector: 'app-lefthome',
  templateUrl: './lefthome.component.html',
  styleUrls: ['./lefthome.component.css']
})
export class LefthomeComponent implements  OnInit{

  constructor(public movservice:MovieService,private imgservice:ImageService) { }

  public slides=this.movservice.movies;

  movies:Movie[];

  ngOnInit(): void {

    this.movservice.getmovies().subscribe(res=>
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
    this.sw();






  }


  sw()
  {
    Swiper.use([Navigation,Pagination,Autoplay]);
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode:true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,

      loopedSlides:10,

      pagination: {
        el: '.swiper-pagination',


      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },



    });

  }








}
