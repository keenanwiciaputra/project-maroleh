import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import { OrderService } from 'src/app/services/order.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-proses',
  templateUrl: './proses.page.html',
  styleUrls: ['./proses.page.scss'],
})
export class ProsesPage implements OnInit {
  private displayMode = 1;
  userEmail: string;
  userID: string;
  user: any;
  order: any;
  orderItem: any;

  query=[];
  queryorder = [];

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private userService: UserService,
    private itemsService: ItemService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
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
        });
      }
      else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

}
