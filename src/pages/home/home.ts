import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  user = {name : "", pass : ""};

  presentAlert()
  {
	  	let alert = this.alertCtrl.create({
		  title: 'Hello World',
    	  subTitle: 'Your Name Is ' + this.user.name + ' And Your Password Is ' + this.user.pass,
	  	  buttons : ['OK']
  		});
  		alert.present();
  }
}
