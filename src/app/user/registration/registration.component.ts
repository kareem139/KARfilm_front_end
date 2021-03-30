import { Usermanager } from './../../shared/usermanager.model';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  usermangerresposes:Usermanager[];
  formmodel={
    userName:'',
    password:''
  }

  constructor(public service:UserService,private toaster:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.service.registerModel=
    {

      email:null,
      password:null,
      confirmPassword:null
    }
  }


  submit()
  {
    this.service.addusers().subscribe(
      (res:any)=>{
        if(res.isSuccess)
        {
          var body=
          {
            userName:this.service.formmodel.value.userName,
            password:this.service.formmodel.value.passwords.password
          }
          this.toaster.success('new user created','registration successful');

          this.service.login(body).subscribe((res:any)=>
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
        else
        {
          res.errors.forEach(element =>
            {
            switch (element.code) {
              case 'DublicateUserName':

                    this.toaster.error('not created','username already exist');

                break;

              default:
                this.toaster.error(element.Description,'registration failed');
                break;
            }

          });
        }
      },
      err=>{console.log(err);}
    );

  }

}
