import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MediaPage } from "../pages/media/media";
import { CamprePage } from "../pages/campre/campre";
import { CountPage } from "../pages/count/count";
import { CropsPage } from "../pages/crops/crops";


import { CameraPreview } from "@ionic-native/camera-preview";
import {Camera} from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { AngularCropperjsModule } from 'angular-cropperjs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { environment } from '../environment';

import { HttpModule} from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({

  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    MediaPage,
    CamprePage,
    CountPage,
    CropsPage
   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularCropperjsModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage, 
    MediaPage,
    CamprePage,
    CountPage,
    CropsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    Camera,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleCloudVisionServiceProvider
  ]
})
export class AppModule {}
