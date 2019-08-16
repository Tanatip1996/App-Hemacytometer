import { Component } from '@angular/core';
// import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Crop } from '@ionic-native/crop';


@Component({
 selector: 'page-contact',
 templateUrl: 'contact.html'
})
export class ContactPage {
    
    myPhoto:any;
    public base64Image:any;
    constructor(public NavCtrl:NavController,private camera:Camera,private crop: Crop) {
   
    }
    takePhoto1() {
      const options: CameraOptions = {
        quality: 100,
        targetWidth: 1000,
        targetHeight: 1000,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum:true
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      //  this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.base64Image = imageData;
 
        this.crop.crop(this.base64Image, {quality: 100})
       .then( 
         newImage => {
          imageData.src = imageData;
          this.base64Image=newImage;
           console.log('new image path is: ' + newImage);
   
          },
         error => {
           console.error('Error cropping image', error);
 
          }
       );
 
       }, (err) => {
       // Handle error
      });
    }}