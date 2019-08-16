import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
// import { MenuPage } from "../menu/menu";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // rootPage:any = TabsPage;

  constructor(public navCtrl: NavController ,public navParams: NavParams) {
  }
  openHomePage(){
    this.navCtrl.push(HomePage);
  }
 
  openContactPage(){
    this.navCtrl.push(ContactPage);
  }
  
}
