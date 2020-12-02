import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {map} from 'rxjs/operators';
import {BankService} from '../../services/bank.service';

@Component({
  selector: 'app-payment-method-detail',
  templateUrl: './payment-method-detail.page.html',
  styleUrls: ['./payment-method-detail.page.scss'],
})
export class PaymentMethodDetailPage implements OnInit {

  bankID: string;
  nama: any;
  logo: any;
  bankItems: any;

  constructor(
      private activatedRoute: ActivatedRoute,
      private banksService: BankService,
      private alertCtrl: AlertController,
      private authSrv: AuthService,
      private userService: UserService
  ) {
  }


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
}
