import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'sp-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Output() deleted = new EventEmitter<void>();
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.deleted.emit();
  }

}
