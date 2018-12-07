import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommaExpr } from '@angular/compiler';
import { CommandeService } from 'src/app/services/commande.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  commandes;
  constructor(public auth: AuthService, private commandeService: CommandeService) { }

  ngOnInit() {
  }


  getCommande() {
    this.commandeService.getCommandesList().snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })).subscribe(commandes => {
      this.commandes = commandes;
    });
  }

}
