import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommaExpr } from '@angular/compiler';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  constructor(public auth: AuthService, private commandeService: CommandeService) { }

  ngOnInit() {
  }

  getCommande() {
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe(res => console.log(res));
  }

}
