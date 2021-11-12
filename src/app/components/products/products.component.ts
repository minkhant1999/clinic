import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


export interface Product {
  name: string;
  price: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.product.getProducts().subscribe(data => {
      console.log(data);

      this.products = Object.values(data);
    })
  }

  addToCart(product: Product) {

  }

}
