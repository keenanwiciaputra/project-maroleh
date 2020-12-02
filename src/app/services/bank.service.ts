import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {User} from './user';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private dbPath = '/bank';


  constructor(
      private db: AngularFireDatabase
  ) { }

  getBankAll(userid : string): AngularFireList<Order> {
    this.dbPath = '/order/'+userid;
    return this.db.list(this.dbPath);
  }

}
