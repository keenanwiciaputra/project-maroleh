import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  qty: any;
  detailItems: any;
  userEmail: string;
  itemID: string;
  userID: string;
  user: any;
  checkWishlist: boolean;
  wish: any;
  wishItem: any;
  query=[];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width: 420,
    centeredSlides: true
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    width: 170,
    centeredSlides: true
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemService,
    private alertCtrl: AlertController,
    private authSrv: AuthService,
    private userService: UserService
  ) { }


  ngOnInit() {
    
    this.authSrv.userDetails().subscribe(res => {
      console.log(res);
      console.log('mulai uid: ', res.uid);
      if(res !== null){
        this.userEmail =  res.email;
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
          console.log(profile);
        });
      }
    });

  }

  ionViewDidEnter() {
    this.qty = 1;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) { return; }
      this.itemID = paramMap.get('id');
      console.log(this.itemID);
      this.itemsService.getDetailItem(this.itemID).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      ).subscribe( data => {
        this.detailItems = data;
        console.log("a");
        console.log(this.detailItems);

        // PANGGIL WISHLIST COCOKIN ITEM ID SAMA SEMUA ITEM DI WISHLIST
        this.itemsService.getAllWishlist(this.userID).snapshotChanges().pipe(
          map(changes2 =>
            changes2.map(c => ({key: c.payload.key, ...c.payload.val()}))
          )
        ).subscribe( data2 => {
          console.log("baba");
          this.wish = data2;
          console.log(this.wish);
          for(let i=0;i<data2.length ;i++){  //How to properly iterate here!!
            this.itemsService.getAllWishlistItem(this.wish[i].id).snapshotChanges().pipe(
              map(changes3 =>
                changes3.map(c => ({key: c.payload.key, ...c.payload.val()}))
              )
            ).subscribe( data3 => {
              this.wishItem = data3;
              this.query[i]= this.wishItem;
              if(this.query[i][0].id == this.detailItems[0].id)
              {
                console.log("ADA YANG SAMA NIH");
                this.checkWishlist = true;
              }
            });
          }console.log(this.query);
        });
            // SELESAI PANGGIL WISHLIST
      });
    });
  }

  async showAlert() {
    await this.alertCtrl.create({
      message:"Barang berhasil ditambahkan ke keranjang",
      buttons: [
        {
          text: "OK",
          handler: () => {
            // console.log(this.userID);
            this.itemsService.createCart(this.detailItems[0].id, this.userID);
          } 
        }
      ]
    }).then(res => res.present());
  }

  wishlist(itemid: string){
    this.checkWishlist = !this.checkWishlist;
    if(this.checkWishlist == true )
    {
      this.itemsService.createWishlist(itemid, this.userID);
      // LOGIC NAMBAHIN WISHLIST
    }
    if(this.checkWishlist == false)
    {
      // const index = this.query.indexOf(i);
      // console.log(index);
      // this.query.splice(index,1);
      this.itemsService.deleteWishlist(itemid, this.userID);
      // LOGIC DELETE WISHLIST
    }
  }
}
