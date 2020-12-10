import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductAdd } from '../interfaces/product-add';
import { catchError, map } from 'rxjs/operators';
import { ProductResponse, ProductsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>('products').pipe(
      map(response => response.products),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting products. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<ProductResponse>(`products/${id}`).pipe(
      map(response => response.product),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting the product. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  addProduct(product: ProductAdd): Observable<Product> {
    return this.http.post<ProductResponse>('products', product).pipe(
      map(response => response.product),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error adding the product. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`products/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error deleting the product. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }
}
