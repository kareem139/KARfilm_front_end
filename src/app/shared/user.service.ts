import { UrlService } from './url.service';
import { Login } from './login.model';
import { Injectable } from '@angular/core';
import { Registerview } from './registerview.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regisurl:string=this.urlservice.mainurl+"/api/Auth/Register";
  registerModel:Registerview;
  loginurl:string=this.urlservice.mainurl+"/api/Auth/Login";
  userdataurl:string=this.urlservice.mainurl+"/api/UserProfile/GetUserProfile";



  constructor(private http: HttpClient, private fb: FormBuilder, private urlservice: UrlService) { }

  formmodel = this.fb.group
  ({
    userName:['', Validators.required],
    email: ['', Validators.email],
    passwords: this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.comparepass})

  });


  comparepass(fb:FormGroup)
  {
    let secondpass = fb.get('confirmPassword');
    if ( secondpass.errors == null || 'passmismatch' in secondpass.errors)
    {
      // tslint:disable-next-line: triple-equals
      if (fb.get('password').value!= secondpass.value) {
      secondpass.setErrors({passmismatch: true});
      }
      else {
      secondpass.setErrors(null);
      }
    }
  }

  addusers()
  {
    var body=
    {
      userName: this.formmodel.value.userName,
      email: this.formmodel.value.email,
      password: this.formmodel.value.passwords.password,
      confirmPassword: this.formmodel.value.passwords.confirmPassword
    };
    return this.http.post(this.regisurl,body)
  }

  login(form: any)
  {

      return this.http.post(this.loginurl,form);
  }

  getuserprofile()
  {

     return this.http.get(this.userdataurl);
  }


  roleMatch(allowRoles):boolean
  {
      var isMatch=false;
      var payload=JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));

      var roles=payload.role;
      allowRoles.forEach(element => {
        if (roles==element) {
          isMatch=true;
          return false;
        }
      });
      return isMatch;
  }

}
