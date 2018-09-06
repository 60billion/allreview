import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector:'profile-page',
  templateUrl: 'profile.html'
})
export class Profile {
  profile: string = "myPage";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
