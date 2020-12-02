import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {ItemService} from '../../../services/item.service';

@Component({
  selector: 'app-keranjang-detail',
  templateUrl: './keranjang-detail.page.html',
  styleUrls: ['./keranjang-detail.page.scss'],
})
export class KeranjangDetailPage implements OnInit {

  userEmail: string;
  userID: string;
  query = [];

  user: any;

  constructor(
      private navCtrl: NavController,
      private authSrv: AuthService,
      private userService: UserService,
      private itemsService: ItemService
  ) {
  }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res => {
      console.log(res);
      console.log('uid: ', res.uid);
      if (res !== null) {
        this.userEmail = res.email;
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
          console.log(profile);
        });
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }
}
