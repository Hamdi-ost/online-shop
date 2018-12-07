import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { CommandeService } from 'src/app/services/commande.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnChanges {

  public orders;
  commandes;
  total = 0;
  productsId = [];
  data = [];
  // tslint:disable-next-line:max-line-length
  constructor(
            private db: AngularFireDatabase,
            private orderService: OrdersService,
            private commandeService: CommandeService,
            private flashMessages: FlashMessagesService,
            private router: Router,
            private auth: AuthService,
            private navbar: NavbarComponent) {
              console.log(this.navbar.total);

  }

  ngOnInit() {
    this.getOrdersList();
    this.getCommandesList();
  }

  getOrdersList() {
    this.orderService.getOrdersList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(orders => {
      this.orders = orders;
      this.orders.forEach(element => {
        this.productsId.push(element.id);
        this.total = this.total + element.total;
      });
    });
  }

  getCommandesList() {
    this.commandeService.getCommandesList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(commande => {
      this.commandes = commande;
    });
  }

  createCommande() {
    this.auth.user.subscribe(user => {
    const productOrdred = [];
    this.orders.forEach(element => {
     productOrdred.push(element.id);
    });
    // tslint:disable-next-line:max-line-length
    const date = new Date();
    // tslint:disable-next-line:max-line-length
    const obj = {id: this.commandes[this.commandes.length - 1].id + 1, email: user.email, date: date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear(), reference: 'ref/' + (this.commandes[this.commandes.length - 1].id + 1), productsId: productOrdred};
    this.commandeService.createOrder(obj);
    console.log(this.navbar.total);
    this.orderService.deleteAll();
    console.log(this.navbar.total);
    this.router.navigateByUrl('/profile');
    this.flashMessages.show('Commande created', { cssClass: 'alert-success', timeout: 3000 });
  });
  }

  deleteOrders() {
    this.total = this.total - this.orders[0].key.total;
    if (isNaN(this.total)) {
      this.total = 0;
    }
  }

  ngOnChanges() {
    this.deleteOrders();

  }


}
