import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getCommande(email) {
    return this.http.get('http://54.38.33.183:8081/hardware/api/commande', {params: {email: email}});
  }

  createCommande (commande) {
    const header = new HttpHeaders ();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://54.38.33.183:8081/hardware/api/commande', commande, {headers: header});
  }



}
