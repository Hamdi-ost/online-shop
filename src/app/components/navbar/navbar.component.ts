import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  orders = [];
  total;
  exist;
  constructor(public auth: AuthService, private orderService: OrderService) {
  }


  ngOnInit() {
    this.exist = this.auth.auth;
    this.orders = this.orderService.getCart();
    this.total = this.orderService.getTotal();
  }

  authExist() {
    this.exist = !this.exist;
  }

  deleteItem (id) {
    this.orderService.deleteOrder(id);
    this.orderService.getCart();
  }


}
