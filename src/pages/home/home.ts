import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntoPosting } from './intoPosting/intoPosting';
import { SalePage } from './salePage/salePage';

@Component({
    selector:'home-page',
    templateUrl: 'home.html'
})
export class Home {

  contents="Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.";
  fixedContents ="";

  constructor(public navCtrl: NavController) {

  }

    makeContentsShortInMain(){
      if(this.contents.length>120){
        this.fixedContents = this.contents.slice(0,120);
        return this.fixedContents;      
      }else{
        return this.contents;
      }
    }

    into(){
      this.navCtrl.push(IntoPosting);
    }
    intoSalePage(){
      this.navCtrl.push(SalePage);
    }

  }



