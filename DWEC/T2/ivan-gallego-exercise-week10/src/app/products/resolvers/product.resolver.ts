import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(private router: Router, private productService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Observable<never> {
    return this.productService.getProduct(+route.params.id).pipe(
      catchError(error => {
        this.router.navigate(['/products']);
        return EMPTY;
      })
    );
  }
}
