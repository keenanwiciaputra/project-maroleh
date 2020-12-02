import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
})
export class PengaturanPage implements OnInit {

  userEmail: string;
  userID: string;

  user: any;

  profile: Observable<any>;

  imgSrc: string;
  selectedImage: any = null;
  imgDB: string;
  imgUrl: string;

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
      if(res !== null){
        this.userEmail =  res.email;
        this.userID = res.uid;
        this.userService.getUser(this.userID).subscribe(profile => {
          this.user = profile;
          this.imgSrc =  this.user.foto;
          console.log(this.imgSrc);
        });

        setTimeout( () => {
          this.f.setValue(this.user);
        })
      }
      else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log(err);
    });
  }

  onSubmit(form: NgForm){
    console.log(form);

    if(form.value.foto != null) {
      var filePath = 'user/foto/'+ this.userID;
    
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.imgUrl = url;
            })
        })
      ).subscribe();
    }
    form.value['foto'] = this.imgUrl;

    this.userService.update(this.userID, form.value).then(res => {
      this.router.navigateByUrl('/main/tabs/profile');
    }).catch(error => console.log(error));

    form.reset();
    this.router.navigateByUrl('/main/tabs/profile');
  }

    // this.userService.update(this.key, form.value).then(res => {
    //   console.log(res);
    //   this.router.navigateByUrl('/week10/index');
    // }).catch(error => console.log(error));

    // form.reset();
    // this.router.navigateByUrl('/week10/index');
  

  changeListener(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = this.imgDB;
      this.selectedImage = null;
    }
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
