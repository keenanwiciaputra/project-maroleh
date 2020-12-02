import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import { OrderService } from 'src/app/services/order.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dikirim',
  templateUrl: './dikirim.page.html',
  styleUrls: ['./dikirim.page.scss'],
})
export class DikirimPage implements OnInit {
  userEmail: string;
  userID: string;
  user: any;
  order: any;
  exist: number;


  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private userService: UserService,
    private itemsService: ItemService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.exist = 0;
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

        this.orderService.getOrderUser(this.userID).snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
          )
        ).subscribe( data => {
          this.order = data;
          console.log(this.order);
          if(this.order.length > 0) {
            this.exist = 1;
            this.order = this.getOrder(2);
            if(this.order.length == 0) {
              this.exist = 0;
            }
          }
        });
      }
      else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log(err);
    });
  }

  getOrder(id: number) {
    return this.order.filter( (item) => {
      return item.status === id 
    });
  }
}
