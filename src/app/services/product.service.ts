import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl =
    'https://lifestyle-clinic-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.productsUrl);
  }
}
