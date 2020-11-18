import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';


@Component({
  selector: 'sp-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];
  newProduct!: Product;
  imageFile = "";
  categories = ["None", "Electronics", "Motor and vehicles", "Sports and hobbies", "Other"];

  constructor() { }

  ngOnInit(): void {
    this.resetProduct();
  }

  submitForm(): void {
    this.products.push(this.newProduct);
    this.resetProduct();
  }

  changeImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newProduct.mainPhoto = reader.result as string;
    });
  }

  resetProduct(): void {
    this.newProduct = {
      category: 0,
      description: "",
      mainPhoto: "",
      price: 0,
      title: ""
    }
    this.imageFile = "";
  }

}
