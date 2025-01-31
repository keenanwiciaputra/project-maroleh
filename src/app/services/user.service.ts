import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/user';
  userRef: AngularFireList<User> = null;


  constructor(
    private db: AngularFireDatabase
  ) { 
    this.userRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<User> {
    return this.userRef;
  }

  getUser(userid: string){
    return this.db.object('user/' + userid).valueChanges();
  }

  create(user: User): any{
    return this.userRef.push(user);
  }

  update(userid: string, value:any): Promise<void> {
    return this.userRef.update(userid, value);
  }
}
