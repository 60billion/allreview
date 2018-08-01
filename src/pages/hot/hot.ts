import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector:'hot-page',
  templateUrl: 'hot.html'
})
export class Hot {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  images: any = [];
  imagess: any = [];

  constructor(public navCtrl: NavController) {
      this.imagess=[
        'assets/img/gridTest/grid1.jpg',
        'assets/img/gridTest/grid2.jpg',
        'assets/img/gridTest/grid3.jpg',
        'assets/img/gridTest/grid4.png',
        'assets/img/gridTest/grid5.jpg',
        'assets/img/gridTest/grid6.jpg',
        'assets/img/gridTest/grid7.jpg',
        'assets/img/gridTest/grid8.jpg',
        'assets/img/gridTest/grid9.png',
        'assets/img/gridTest/grid1.jpg',
        'assets/img/gridTest/grid2.jpg',
        'assets/img/gridTest/grid3.jpg',
      ]
  }



}
