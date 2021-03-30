import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private service:UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (localStorage.getItem('token')!=null) {

        let roles=next.data['permittedRoles'] as Array<string>;
        if (roles)
        {
          if (this.service.roleMatch(roles))
          {
            return true;
          }
          else
          {
            this.router.navigateByUrl('/forbeddin');
            return false;
          }

        }
        return true;
      }
      else
      {
        this.router.navigateByUrl('/user/login')
        return false;
      }

  }



}
