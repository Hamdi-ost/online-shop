import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exist = false;
  constructor(public auth: AuthService) {
    if (auth.user) {
      this.exist = true;
    } else {
      this.exist = false;
    }
   }

  ngOnInit() {
  }

}
