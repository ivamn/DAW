import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'sp-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() add = new EventEmitter<Product>();

  newProduct!: Product;
  imageFile = '';

  constructor() { }

  ngOnInit(): void {
    this.resetProduct();
  }

  submitForm(): void {
    this.add.emit(this.newProduct);
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
      description: '',
      mainPhoto: '',
      price: 0,
      title: ''
    }
    this.imageFile = '';
  }

}
