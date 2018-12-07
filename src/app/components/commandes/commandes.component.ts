import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../assets/produits.json';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes;
  commande;
  ordredProducts = [];

  constructor(private commandeService: CommandeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.commandeService.getCommandesList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(commande => {
      this.commandes = commande;
      this.route.params.subscribe(params => {
        // tslint:disable-next-line:no-shadowed-variable
        this.commande = this.commandes.filter(commande => Number(commande.id) === Number(params['id']));
        this.commande[0].productsId.forEach(el => {
           this.ordredProducts.push(data['products'].filter(res => Number(res.id) === Number(el)));
           console.log(this.ordredProducts);
          });
      });
    });
  }

}
