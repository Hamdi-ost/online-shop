import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get('http://54.38.33.183:8081/hardware/api/products');
  }

  getCategoryById(id) {
    return this.http.get('http://54.38.33.183:8081/hardware/api/products/' + id);
  }
}
