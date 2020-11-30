import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private dbPath = '/item';
  itemRef: AngularFireList<Item> = null;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.itemRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Makanan & Minuman"));
   }

   getAll(): AngularFireList<Item> {
     return this.itemRef;
   }
}
