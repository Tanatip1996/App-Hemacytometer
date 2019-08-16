import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Media2Page} from "../media2/media2";
// import { MenuPage } from "../menu/menu";

/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }
  // openMenuPage(){
  //   this.navCtrl.push(MenuPage);
  // }

  // openMedia2Page(){
  //   this.navCtrl.push(Media2Page);
  // }
}
