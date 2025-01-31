import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {
  userEmail: string;
  userID: string;
  query = [];
  queryCart = [];

  qty: any;
  user: any;
  cart: any;
  cartItem: any;
  total: number = 0;
  validateKeranjang: boolean;
  ctr: any;


  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private userService: UserService,
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    // this.qty = 1;
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
          this.ctr = data.length;
          if(this.ctr == 0)
          {
            this.validateKeranjang = true;
          }
          if(this.ctr > 0)
          {
            this.validateKeranjang = false;
          }
          // this.qty = this.cart[1].qty;
          for (let i = 0; i < data.length ; i++){  // How to properly iterate here!!
            this.itemsService.getAllCartItem(this.cart[i].id).snapshotChanges().pipe(
              map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
              )
            ).subscribe(data => {
              this.cartItem = data;
              this.query[i] = this.cartItem;
              this.query[i][0].qty = this.cart[i].qty;
              this.total = this.total + (this.query[i][0].qty*(this.query[i][0].harga-this.query[i][0].harga*this.query[i][0].disc_amount/100));
              if(this.ctr == 0 && this.query.length>=0)
              {
                console.log("TEST");
                for(let j=0; j<this.query.length;j++)
                {
                  const index = this.query.indexOf(j);
                  this.query.splice(index, 1);
                  console.log("HAPUS");
                }
              }
            });
          }
          // console.log(this.query);
        });
      }
      else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }

  deleteCart(itemid: string, i: string){
    const index = this.query.indexOf(i);
    // console.log(index);
    this.query.splice(index, 1);
    this.itemsService.deleteCart(itemid, this.userID);
  }

  incrementQty(itemid:string, quantity:number, i:string) {
    quantity += 1;
    this.query[i][0].qty = quantity;
    this.itemsService.updateCart(itemid, this.userID, this.query[i][0].qty);
  }

  decrementQty(itemid:string, quantity:number, i:string) {
    if (quantity - 1 < 1) {
      quantity = 1;
      this.query[i][0].qty = quantity;
      this.itemsService.updateCart(itemid, this.userID, this.query[i][0].qty);
    } else {
      quantity -= 1;
      this.query[i][0].qty = quantity;
      this.itemsService.updateCart(itemid, this.userID, this.query[i][0].qty);
    }
  }
  
}
