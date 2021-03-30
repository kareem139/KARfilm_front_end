import { TvShowsService } from 'src/app/admin/shared/tv-shows.service';
import { MovieService } from 'src/app/admin/shared/movie.service';
import { UrlService } from './../shared/url.service';
import { HttpClient } from '@angular/common/http';
import { MyService } from './../admin/shared/my.service';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowsService } from '../admin/shared/shows.service';

@Component({
  selector: 'app-my-mainnav',
  templateUrl: './my-mainnav.component.html',
  styleUrls: ['./my-mainnav.component.css']
})
export class MyMainnavComponent implements OnInit {



  ola:boolean;
  userdata:any;
  userdataurl:string=this.urlservice.mainurl+"/api/UserProfile/GetUserProfile";
  constructor(private router:Router,private service:UserService,
    private myservice:MyService,private http:HttpClient,private urlservice:UrlService,
    private movservice:MovieService,private tvservice:TvShowsService, private episservice:ShowsService) { }

  ngOnInit(): void

  {

              /*this my scrypt*/
    /*this my scrypt*/
    jQuery( function()
    {
      function checkScroll(){
          var opacity = 150; //start point navbar fixed to top changes in px

          if($(window).scrollTop() > opacity){
              $('.navbar.navbar-fixed-top').addClass("navchange");
          }else{
              $('.navbar.navbar-fixed-top').removeClass("navchange");
          }
      }

      if($('.navbar').length > 0){
          $(window).on("scroll load resize", function(){
              checkScroll();
          });
      }

      $('.dropdown').on('show.bs.dropdown', function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
      });

      $('.dropdown').on('hide.bs.dropdown', function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
      });

    })

  /*end my scrypt*/
  /*end my scrypt*/

  }
  getuserprofile()
  {

     return this.http.get(this.userdataurl).toPromise().then(res=>
      {
        this.userdata=res ;
      })
  }



  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/user/login');
  }
  se()
  {
    var e = (<HTMLInputElement>document.getElementById("search")).value;
    this.movservice.moviewithcat=e;
    this.tvservice.categorynamefromleftnav=e;
    this.episservice.predict=e;

    this.router.navigateByUrl('/home/search');
  }


}
