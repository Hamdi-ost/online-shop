import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    const formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    console.log();
    
    form.reset();
  }


}
