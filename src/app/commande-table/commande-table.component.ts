import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CommandeTableDataSource } from './commande-table-datasource';
import { CommandeService } from '../services/commande.service';

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


  constructor (private commandeService: CommandeService) {
    this.commandeService.getCommande('mohamed.tounsi@gmail.com').subscribe(res => {
      const obj = [];
      for (let i = 0; i < res.length; i++) {
        const ob = {'id': res[i].id, 'reference': res[i].reference, 'date': res[i].date};
        obj.push(ob);
      }
      this.dataSource = new CommandeTableDataSource(obj, this.paginator, this.sort);
    });
  }

  ngOnInit() {
  }
}
