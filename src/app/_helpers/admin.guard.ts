import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public AuthService:AuthService, public router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.AuthService.getCurrentUser()?.Id != null && this.AuthService.getCurrentUser()?.Role=="Admin")
      {
        return true;
      }
       this.AuthService.redirectUrl = state.url;
      this.router.navigate(['login']);
      return false;

  }

}
