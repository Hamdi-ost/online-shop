import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CommandeService } from 'src/app/services/commande.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orders = [];
  total;
  productsId = [];

  // tslint:disable-next-line:max-line-length
  constructor(private orderService: OrderService, private commandeService: CommandeService, private flashMessages: FlashMessagesService, private router: Router) {

  }

  ngOnInit() {
    this.orders = this.orderService.getCart();
    this.total = this.orderService.getTotal();
    this.orders.forEach(element => {
      this.productsId.push(element.id);
    });
  }

  createCommande() {
    let commande;
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let key;
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe( data => {
      key = Number(data[data.length - 1]['reference'].substr(data[10]['reference'].indexOf('/') + 1, 2)) + 1;
     commande = {
        'reference': 'Ord625/' + key, date: 521554525, 'email': 'mohamed.tounsi@gmail.com', 'statut': 'new', 'productsId': this.productsId
      };
      this.commandeService.createCommande(commande).subscribe(res => {
        this.router.navigateByUrl('/profile');
        this.flashMessages.show('Commande created', { cssClass: 'alert-success', timeout: 3000 });
      });
    });
  }

}
