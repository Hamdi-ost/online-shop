import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { CommandeService } from 'src/app/services/commande.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewChecked {

  public orders;
  total = 0;
  productsId = [];
  data = [];
  // tslint:disable-next-line:max-line-length
  constructor(private db: AngularFireDatabase, private orderService: OrdersService, private commandeService: CommandeService, private flashMessages: FlashMessagesService, private router: Router) {
  }

  ngOnInit() {
    this.db.list('orders').valueChanges().subscribe(re => console.log(re));
    this.getOrdersList();
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

  deleteOrders() {
    this.total = this.total - this.orders[0].key.total;
    if (isNaN(this.total)) {
      this.total = 0;
    }
  }

  ngAfterViewChecked(): void {
    this.deleteOrders();
  }

  createCommande() {
    this.orderService.deleteAll();
    let commande;
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let key;
<<<<<<< HEAD
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe( res => {
      this.data.push(res);
      key = Number(res[this.data[0].length - 1]['reference'].substr(res[10]['reference'].indexOf('/') + 1, 2)) + 1;
=======
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe( data => {
      key = Number(data[15]['reference'].substr(data[10]['reference'].indexOf('/') + 1, 2)) + 1;
>>>>>>> rahma
     commande = {
        'reference': 'Ord625/' + key, date: 521554525, 'email': 'mohamed.tounsi@gmail.com', 'statut': 'new', 'productsId': this.productsId
      };
      this.orderService.createOrder(commande);
      this.commandeService.createCommande(commande).subscribe(resp => {
        this.router.navigateByUrl('/profile');
        this.flashMessages.show('Commande created', { cssClass: 'alert-success', timeout: 3000 });
      });
    });
  }

}
