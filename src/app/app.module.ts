import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Profile } from '../pages/profile/profile';
import { Hot } from '../pages/hot/hot';
import { Home } from '../pages/home/home';
import { Alarm } from '../pages/alarm/alarm';
import {ProgressBarModule} from "angular-progress-bar"
import { IntoPosting } from '../pages/home/intoPosting/intoPosting';
import { SalePage } from '../pages/home/salePage/salePage';
import { Cart } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
      Home,
        IntoPosting,
        SalePage,
      Hot,
      Cart,
      Alarm,
      Profile,
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProgressBarModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
      Home,
       IntoPosting,
       SalePage,
      Hot,
      Cart,
      Alarm,
      Profile,
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
