import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-keranjang-detail',
  templateUrl: './keranjang-detail.page.html',
  styleUrls: ['./keranjang-detail.page.scss'],
})
export class KeranjangDetailPage implements OnInit {
  userEmail: string;
  userID: string;
  query = [];
  queryCart = [];

  qty: any;
  user: any;
  cart: any;
  cartItem: any;
  total: number = 0;

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private userService: UserService,
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
              this.total = this.total + (this.query[i][0].qty*this.query[i][0].harga);
            });
          }
          console.log(this.query);
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
