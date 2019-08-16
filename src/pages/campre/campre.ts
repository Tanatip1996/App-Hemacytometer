
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreview } from "@ionic-native/camera-preview";
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';




// /**
//  * Generated class for the CamprePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @Component({
//   selector: 'page-campre',
//   templateUrl: 'campre.html',
// })
// export class CamprePage {

//   picture: string;

//   // cameraOpts: CameraPreviewOptions = {
//   //   x: 37,
//   //   y: 74,
//   //   width: 300,
//   //   height:300,
//   //   camera:this.cameraPreview.CAMERA_DIRECTION.BACK,
//   //   toBack: false,
    
//   // };

//   // cameraPictureOpts: CameraPreviewPictureOptions = {
//   //   width: window.innerWidth,
//   //   height: window.innerHeight,
//   //   quality: 100
//   // };
//         cameraPreviewOpts: CameraPreviewOptions = {
//         x: 37,
//         y: 74,
//         width: 300,
//         height: 300,
//         camera: 'rear',
//         tapPhoto: true,
//         previewDrag: false,
//         toBack: false,
//         alpha: 1
//       };

//       pictureOpts:CameraPreviewPictureOptions={
//         width: window.innerWidth,
//         height: window.innerHeight,
//         quality: 100
//       }

//   constructor(private cameraPreview: CameraPreview,public http:HttpClient) {}

//   ionViewDidLoad() {
//     this.startCamera();
//   }

//   startCamera() {
//     this.picture = null;
//     this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
//       (res) => {
//         console.log(res)
//       },
//       (err) => {
//         console.log(err)
//       });
//   }

 

//   // switchCamera() {
//   //   this.cameraPreview.switchCamera();
//   // }

//   takePicture() {
//       this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
//       this.cameraPreview.stopCamera();
//       this.picture = 'data:image/jpeg;base64,' + imageData;
//     }, (err) => {
//       console.log(err);
//       this.picture = 'assets/img/test.jpg';
//     });
//     this.cameraPreview
//   }

//   savePicture(){
    

//   }
 

// }
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CountPage } from './../count/count';
import { NavController, NavParams } from 'ionic-angular';
import { DomSharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';


@Component({
 selector: 'page-campre',
 templateUrl: 'campre.html'
})
export class CamprePage {
    galleryType ="gallery";  
    
    
    items: FirebaseListObservable<any[]>;
    constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private vision: GoogleCloudVisionServiceProvider,
    private db: AngularFireDatabase,
    private alert: AlertController,
    private crop: Crop
    ) {
    this.items = db.list('items');
    }
    takePhoto() {
    const options: CameraOptions = {
    quality: 100, 
    targetHeight: 2000,
    targetWidth: 2000,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum:true
    }
      
    this.camera.getPicture(options).then((imageData) => {
      
    this.vision.getLabels(imageData)
    .subscribe((result) => {
      
    this.saveResults(imageData, result.json().responses);
    }, err => {
    this.showAlert(err);
    });
    }, err => {
    this.showAlert(err);
    });
    }
    saveResults(imageData, results) {
    // this.items.remove() //Delete Data All
    // this.items.push({imageData: imageData,results:results})//push data but random key
    this.items.update('keydatapic', { imageData: imageData})//Make key and updata
    .then(_ => { })
    .catch(err => { this.showAlert(err) });
    } 
    showAlert(message) {
    let alert = this.alert.create({
    title: 'Error',
    subTitle: message,
    buttons: ['OK']
    });
    alert.present();
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad MediaPage');
      }
      
      opencountPage(){
        this.navCtrl.push(CountPage);
      }
}
