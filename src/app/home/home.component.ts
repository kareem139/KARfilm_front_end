import { HttpClient } from '@angular/common/http';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import { Autoplay } from 'swiper';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ismobile:false;
  constructor(private router:Router,private service:UserService,private http:HttpClient) { }

  ngOnInit(): void
  {


    this.sw();
    this.mobile();



  }



  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/user/login');
  }


  sw()
  {
    Swiper.use([Navigation,Pagination,Autoplay]);
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loopedSlides:10,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },



    });

  }

    mobile()
    {

        $(window).resize(function() {
          if ($(this).width()<768) {
            $('#main').addClass('col-12 m-100 p-50');

            $('.right').hide();
            $('.left').hide();
          }
          else
          {
            $('#main').addClass('col-6');
            $('.right').show();
            $('.left').show();
          }
        });

          if ($(window).width()<768) {
            $('#main').addClass('col-12 m-100 p-50');
            $('.right').hide();
            $('.left').hide();
          }
          else
          {
            $('#main').addClass('col-6');
            $('.right').show();
            $('.left').show();
          }




    }

}
