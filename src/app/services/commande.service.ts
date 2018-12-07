import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {


  private dbPath = '/commandes';
  commandesRef: AngularFireList<any> = null;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.commandesRef = db.list(this.dbPath);
  }

  getCommandesList(): AngularFireList<any> {
    return this.commandesRef;
  }

  addInfo (key, value) {
    this.commandesRef.set(key, value);
  }

  createOrder(commande): void {
    this.commandesRef.push(commande);
  }


  // getCommande(email) {
  //   return this.http.get('http://54.38.33.183:8081/hardware/api/commande', {params: {email: email}});
  // }

  // createCommande (commande) {
  //   const header = new HttpHeaders ();
  //   header.append('Content-Type', 'application/json');
  //   return this.http.post('http://54.38.33.183:8081/hardware/api/commande', commande, {headers: header});
  // }

}
