import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { CropsPage } from "../pages/crops/crops";


import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = TabsPage;
  
}
