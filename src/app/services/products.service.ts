import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('http://54.38.33.183:8081/hardware/api/products');
  }

  getProductById(id) {
    return this.http.get('http://54.38.33.183:8081/hardware/api/product/' + id);
  }
}
