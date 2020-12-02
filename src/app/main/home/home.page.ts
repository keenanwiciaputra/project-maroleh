import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segmentChecker : boolean;
  userID: string;
  userEmail: string;
  diskonItem: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width:380,
    centeredSlides: true
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    width:170,
    centeredSlides: true
  };

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.segmentChecker = !this.segmentChecker;
  }

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res=> {
      console.log('res:', res);
      if(res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log(err);
    });

    this.itemsService.getItemDiskon().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe( data => {
      this.diskonItem = data;
      console.log(this.diskonItem);
      });
  }

  logout() {
    this.authService.logoutUser()
      .then(res=> {
        console.log(res);
        this.navCtrl.navigateBack('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }

  goSearch() {
    this.navCtrl.navigateForward('/main/tabs/home/search');
  }

}
