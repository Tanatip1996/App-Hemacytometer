import { GoogleCloudVisionServiceProvider } from './../../providers/google-cloud-vision-service/google-cloud-vision-service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-crpos',
  templateUrl: 'crops.html'
})
export class CropsPage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;
  test =null;

  myImage = null;
  scaleValX = 1;
  scaleValY = 1;
  items: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase,
    private vision: GoogleCloudVisionServiceProvider,
    private camera: Camera) {
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 1,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    };{
    this.items = db.list('items');
    }
  }

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myImage = 'data:image/jpeg;base64,' + imageData;
      console.log(imageData)
    });
  }

  reset() {
    this.angularCropper.cropper.reset();
  }

  clear() {
    this.angularCropper.cropper.clear();
  }

  rotate() {
    this.angularCropper.cropper.rotate(90);
  }

  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }

  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg',(100/100));
    this.croppedImage = croppedImgB64String;
    console.log(croppedImgB64String)
    
    // this.croppedImage.then((croppedImage)=>{
    //   this.vision.getLabels(croppedImage).subscribe((result)=>{
    //     this.send(croppedImage,result.json().responses);
    //   })
    // })

  }
  send(croppedImgB64String,result) {
    // this.items.remove() //Delete Data All
    // this.items.push({imageData: imageData,results:results})//push data but random key
    this.items.update('keydatapic', { imageData: croppedImgB64String})//Make key and updata
    .then(_ => { })
    
    } 
}