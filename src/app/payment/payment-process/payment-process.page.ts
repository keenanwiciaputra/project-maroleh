import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {BankService} from '../../services/bank.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment-process',
  templateUrl: './payment-process.page.html',
  styleUrls: ['./payment-process.page.scss'],
})
export class PaymentProcessPage implements OnInit {

  bankID: string;
  nama: any;
  logo: any;
  bankItems: any;
  constructor(public alertController: AlertController,
              private banksService: BankService,
              private activatedRoute: ActivatedRoute)
  { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return;
      }
      this.bankID = paramMap.get('id');
      console.log(this.bankID);
      this.banksService.getDetailBank(this.bankID).snapshotChanges().pipe(
          map(changes =>
              changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.bankItems = data;
        console.log(this.bankItems);
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Berhasil disalin',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
