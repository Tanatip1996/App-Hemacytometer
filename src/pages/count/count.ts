import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crop } from '@ionic-native/crop';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the CountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-count',
  templateUrl: 'count.html',
})
export class CountPage {
  
  picture: string;

  result:any=[];
  data: Observable<any>;

  items: FirebaseListObservable<any[]>;
    constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:HttpClient,
    private camera: Camera,
   
    private db: AngularFireDatabase,
    
    private crop: Crop
    ) {
    this.items = db.list('items');
    }

  getData1(){
    // var url = "https://jsonplaceholder.typicode.com/posts/2";
    var url = "http://127.0.0.1:5000/TestInput"
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      console.log(data)
    })
    
  }

  getData(){
    // var url = "https://jsonplaceholder.typicode.com/posts/2";
   // var url = "http://127.0.0.1:5000/TestInputa"
    var url ="http://35.247.180.240:5000/Detect"
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      console.log(data)
    })
    
  }

  getimage(){
    // var url = "https://jsonplaceholder.typicode.com/posts/2";
    var url = "http://127.0.0.1:5000/image"
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
      console.log(data)
    })
    
  }
  // getData(dataToSend)
  // {
  //   var url = "https://34.87.39.107:5000/hell";
  //   return this.http.get(url,dataToSend,
  //   {headers:new HttpHeaders(
  //   {"content-Type":"application/json"})});
  // }

}
