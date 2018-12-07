import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CommandeTableDataSource } from './commande-table-datasource';
import { CommandeService } from '../../services/commande.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-commande-table',
  templateUrl: './commande-table.component.html',
  styleUrls: ['./commande-table.component.css'],
})
export class CommandeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CommandeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'reference', 'date'];

  data = [];
  constructor (private commandeService: CommandeService, private auth: AuthService) {
    this.auth.user.subscribe(user => {
      this.commandeService.getCommandesList().snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })).subscribe(commande => {
        const obj = commande;
        const  commandeDemmande = obj.filter(res => res.email === user.email);
        this.dataSource = new CommandeTableDataSource(commandeDemmande, this.paginator, this.sort);

      });
    });

   /* this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe(res => {
      const obj = [];
      this.data.push(res);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        const ob = {'id': res[i].id, 'reference': res[i].reference, 'date': res[i].date};
        obj.push(ob);
      }
      this.dataSource = new CommandeTableDataSource(obj, this.paginator, this.sort);
    });*/
  }

  ngOnInit() {
  }
}
