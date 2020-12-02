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
  detailItems: any;
  userEmail: string;
  userID: string;
  user: any;

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
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) { return; }
      const itemId = paramMap.get('id');
      console.log(itemId);
      this.itemsService.getDetailItem(itemId).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      ).subscribe( data => {
        this.detailItems = data;
        console.log(data);
      });
    });

    this.authSrv.userDetails().subscribe(res => {
      console.log(res);
      console.log('uid: ', res.uid);
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
}
