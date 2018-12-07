import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dbPath = '/orders';
  ordersRef: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.ordersRef = db.list(this.dbPath);
  }

  getOrdersList(): AngularFireList<any> {
    return this.ordersRef;
  }

  createOrder(order): void {
    this.ordersRef.push(order);
  }

  createTotal(total) {
    this.ordersRef.push(total);

  }

  deleteOrder(key: string): void {
    this.ordersRef.remove(key).catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.ordersRef.remove().catch(error => this.handleError(error));
  }

  updateOrder(key: string, value: any): void {
    this.ordersRef.update(key, value).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
