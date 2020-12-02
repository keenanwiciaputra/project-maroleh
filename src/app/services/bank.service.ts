import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Bank } from './bank';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private dbPath = '/bank';
  bankRef: AngularFireList<Bank> = null;

  constructor(
      private db: AngularFireDatabase
  ) {
    this.bankRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Bank> {
    return this.bankRef;
  }
  getDetailBank(id): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('id').equalTo(id));
  }
}
