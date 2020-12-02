import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-alamat',
  templateUrl: './alamat.page.html',
  styleUrls: ['./alamat.page.scss'],
})
export class AlamatPage implements OnInit {

  userID: string;

  user: any;

  profile: Observable<any>;

  @ViewChild('f', null) f: NgForm;

  constructor(
      private storage: AngularFireStorage,
      private navCtrl: NavController,
      private authSrv: AuthService,
      private userService: UserService,
      private router: Router

  ) { }

  ngOnInit() {
    this.authSrv.userDetails().subscribe(res => {
      console.log(res);
      console.log('uid: ', res.uid);
      if (res !== null){
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
        });


        setTimeout( () => {
          this.f.setValue(this.user);
        });
      }
      else {
        this.navCtrl.navigateBack('/main/tabs/keranjang/keranjang-detail');
      }
    }, err => {
      console.log(err);
    });
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.userService.update(this.userID, form.value).then(res => {
      this.router.navigateByUrl('/main/tabs/keranjang/keranjang-detail');
    }).catch(error => console.log(error));

    form.reset();
    this.router.navigateByUrl('/main/tabs/keranjang/keranjang-detail');
  }

  // this.userService.update(this.key, form.value).then(res => {
  //   console.log(res);
  //   this.router.navigateByUrl('/week10/index');
  // }).catch(error => console.log(error));

  // form.reset();
  // this.router.navigateByUrl('/week10/index');


}
