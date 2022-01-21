import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router){

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.auth.user.pipe(
      take(1),
      map(user=>{
        if(!user){
          this.router.navigateByUrl('/login');
          return false;
        } else {
          return true;
        }
      })
    )
  }
  
  
}
