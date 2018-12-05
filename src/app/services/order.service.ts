import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   order = [
     {id: 1, name: 'MODERN BEAT HT', quantity: 2, prixUnitaire: 155.00, total: 310.00, img: 'product-1.png'},
     {id: 2, name: 'MODERN BEAT HT', quantity: 2, prixUnitaire: 155.00, total: 310.00, img: 'product-1.png'},
   ];

  // order = [];

  constructor() { }

  addToCart(product) {
    this.order.push(product);
  }

  getCart() {
    return this.order;
  }

  getTotal() {
    let total = 0;
    this.order.forEach(element => {
      total = total + element.total;
    });
    return total;
  }

  deleteOrder(id) {
    this.order.splice(this.order.indexOf(id), 1);
  }
}
