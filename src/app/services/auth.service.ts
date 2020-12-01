import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user_id: string;

  constructor(private fireAuth: AngularFireAuth) { }

  registerUser(value) {
    // return new Promise<any>((resolve, reject)=> {
    //   this.fireAuth.createUserWithEmailAndPassword(value.email, value.password)
    //     .then(
    //       res => resolve(res),
    //       err => reject(err)
    //     );
    // });

    return firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then((user)=>{
      if(user){
        console.log(user);
        this.user_id = user['user'].uid;

        firebase.database().ref('user/' + this.user_id).set({
          namadepan: value.namadepan,
          namabelakang: value.namabelakang,
          notelepon: value.notelepon,
          tgllahir: null,
          jeniskelamin: null,
          foto: 'https://firebasestorage.googleapis.com/v0/b/maroleh-74f45.appspot.com/o/user%2Ffoto%2Fdefault.jpg?alt=media&token=b6e5f43b-ff89-4c0e-afa0-c6cacbf9caac'
        })
      }
    })
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err=> reject(err)
        );
    });
  }

  logoutUser() {
    return new Promise((resolve,reject) => {
      if(this.fireAuth.currentUser) {
        this.fireAuth.signOut()
          .then(() => {
            console.log('Log Out');
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    });
  }

  userDetails(){
    return this.fireAuth.user;
  }
}
