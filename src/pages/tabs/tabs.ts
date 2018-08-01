import { Component } from '@angular/core';


import { Profile } from '../profile/profile';
import { Hot } from '../hot/hot';
import { Home } from '../home/home';
import { Alarm } from '../alarm/alarm';
import { Cart } from '../cart/cart';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = Hot;
  tab3Root = Cart;
  tab4Root = Alarm;
  tab5Root = Profile;

  constructor() {

  }
}
