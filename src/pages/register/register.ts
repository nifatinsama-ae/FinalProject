import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  departments = [
    { id: 1, name: 'Informaton Technology'},
    { id: 2, name: 'Accounting'},
    { id: 3, name: 'Nechanical'},
    { id: 4, name: 'Food Technology'},
    { id: 5, name: 'Electrical Power'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
}
