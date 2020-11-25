import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumericIdGuardGuard implements CanActivate {
  constructor(private router: Router) {  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = +route.params.id;
    if (isNaN(id) || id < 1) {
      alert('Not a valid product ID.');
      return this.router.createUrlTree(['/products']); // Go to products page
    }
    return true;
  }

}
