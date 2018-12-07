import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  orders = [];
  total = 0;
  exist;
  constructor(public auth: AuthService, private orderService: OrdersService) {
  }


  ngOnInit() {
    this.exist = this.auth.auth;
    this.getOrdersList();
  }

  authExist() {
    this.exist = !this.exist;
  }

  getOrdersList() {
    this.orderService.getOrdersList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(orders => {
      this.orders = orders;
      this.orders.forEach(element => {
        this.total = this.total + element.total;
      });
    });
  }

  deleteOrders() {
    this.orderService.deleteOrder(this.orders[0].key);
    this.total = this.total - this.orders[0].key.total;
    if (isNaN(this.total)) {
      this.total = 0;
    }
  }


}
