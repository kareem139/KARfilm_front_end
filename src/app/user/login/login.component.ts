import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formmodel={
    userName:'',
    password:''
  }

  constructor(public service:UserService,private route:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

      if (localStorage.getItem('token')!=null) {
        this.route.navigateByUrl('/home/movies');
      }
      else
      {
          document.getElementById("logout").style.display = 'none';
          document.getElementById("signup").style.display = 'inline';
          document.getElementById("login").style.display = 'inline';
      }
  }

  submit(form:NgForm)
  {

      this.service.login(form.value).subscribe((res:any)=>
        {
          localStorage.setItem('token',res.token);
          this.route.navigateByUrl('/home/movies');
          this.toaster.success('welcome to my web','sign in success')
        },err=>{
          if (err.status==400)
           {
            this.toaster.error('incorrect user or password','auth faild');
          }
          else
          {
            this.toaster.error('incorrect user or password','auth faild');
          }
        })
  }

}
