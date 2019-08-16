import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamprePage } from './campre';


@NgModule({
  declarations: [
    CamprePage,
    
  ],
  imports: [
    IonicPageModule.forChild(CamprePage),
  ],
})
export class CamprePageModule {}
