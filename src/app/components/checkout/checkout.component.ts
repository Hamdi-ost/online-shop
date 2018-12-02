import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders = [];
  total;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orders = this.orderService.getCart();
    this.total = this.orderService.getTotal();
  }

}
