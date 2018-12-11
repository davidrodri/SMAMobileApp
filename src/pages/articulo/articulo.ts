import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {
  articulos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloPage');
    this.obtenerArticulos();
  }

  obtenerArticulos(){
    this.http.get('https://localhost:44364/api/producto/obtenertodos').subscribe(response => {
      this.articulos = response;      
    }, error => {
      console.log(error);
    })
  }

}
