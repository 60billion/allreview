import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector:'cart-page',
  templateUrl: 'cart.html'
})
export class Cart {
  cart:string = "basket";



  constructor(public navCtrl: NavController) {

  }


}
