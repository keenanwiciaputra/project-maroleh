import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {AlertController, NavController} from '@ionic/angular';
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

  userEmail: string;
  userID: string;
  query = [];
  queryCart = [];

  qty: any;
  user: any;
  cart: any;
  cartItem: any;
  total: number = 0;
  totalFix: number = 0;

  constructor(
      private navCtrl: NavController,
      private authSrv: AuthService,
      private activatedRoute: ActivatedRoute,
      private alertCtrl: AlertController,
      private userService: UserService,
      private banksService: BankService,
      private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res => {
      console.log(res);
      console.log('uid: ', res.uid);
      if (res !== null){
        this.userEmail =  res.email;
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
          console.log(profile);
        });

        this.itemsService.getAllCart(this.userID).snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
            )
        ).subscribe( data => {
          this.cart = data;
          this.total = 0;
          // this.qty = this.cart[1].qty;
          // console.log(this.cart);
          for (let i = 0; i < data.length ; i++){  // How to properly iterate here!!
            this.itemsService.getAllCartItem(this.cart[i].id).snapshotChanges().pipe(
                map(changes =>
                    changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
                )
            ).subscribe(data => {
              this.cartItem = data;
              this.query[i] = this.cartItem;
              this.query[i][0].qty = this.cart[i].qty;
              this.totalFix = this.total + (this.query[i][0].qty*this.query[i][0].harga) + 18000;
              this.total = this.total + (this.query[i][0].qty*this.query[i][0].harga);
            });
          }
          console.log(this.query);
        });

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
      else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }
}
