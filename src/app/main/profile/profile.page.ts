import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width:170,
    centeredSlides: true
  };

  userEmail: string;
  userID: string;
  query=[];

  user: any;
  rekom: any;
  rekomItem: any;

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
      if(res !== null){
        this.userEmail =  res.email;
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
          console.log(profile);
        });

        this.itemsService.getAllRekom(this.userID).snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
          )
        ).subscribe( data => {
          this.rekom = data;
          console.log(this.rekom);

          for(let i=0;i<data.length ;i++){  //How to properly iterate here!!
            this.itemsService.getAllRekomItem(this.rekom[i].id).snapshotChanges().pipe(
              map(changes =>
                changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
              )
            ).subscribe( data => {
              this.rekomItem = data;
              this.query[i]= this.rekomItem;

            });
          }console.log(this.query);
        });
      }
      else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log(err);
    });
  }

  logout() {
    this.authSrv.logoutUser()
      .then(res=> {
        console.log(res);
        this.navCtrl.navigateBack('/login');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
