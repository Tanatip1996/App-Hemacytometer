import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MediaPage } from '../media/media';
import { CamprePage } from "../campre/campre";
import { CountPage } from "../count/count";
import { CropsPage } from "../crops/crops";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MediaPage;
  tab3Root = CamprePage;
  tab4Root = CountPage;
  tab5Root = CropsPage;

  constructor() {

  }
}