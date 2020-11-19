import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.page.html',
  styleUrls: ['./payment-process.page.scss'],
})
export class PaymentProcessPage implements OnInit {

  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Berhasil disalin',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
