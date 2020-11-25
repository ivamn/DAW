import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Rock',
        description: 'Just a rock',
        price: 9.8,
        mainPhoto: 'assets/piedra.jpg',
        category: 1
      },
      {
        id: 2,
        title: 'Crown',
        description: 'Just a crown',
        price: 59.50,
        mainPhoto: 'assets/crown.png',
        category: 2
      },
      {
        id: 3,
        title: 'Glasses',
        description: 'Just some glasses',
        price: 15,
        mainPhoto: 'assets/glasses.png',
        category: 3
      }
    ];
  }
}
