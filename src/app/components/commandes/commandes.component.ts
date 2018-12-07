import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../assets/produits.json';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes;
  commande;
  ordredProducts;

  constructor(private commandeService: CommandeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe(commandes => {
      this.commandes = commandes;
      this.route.params.subscribe(params => {
        this.commande = this.commandes.filter(commande => Number(commande.id) === Number(params['id']));
        this.ordredProducts = data['products'].filter(product => Number(product.id === this.commande[0].id));
      });
    });
  }

}
