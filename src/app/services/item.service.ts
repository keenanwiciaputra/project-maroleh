import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private dbPath = '/item';
  private dbRekom = '/rekomendasi';
  private dbWish = '/wishlist';
  private dbCart = '/cart';
  itemRef: AngularFireList<Item> = null;
  itemDiskonRef: AngularFireList<Item> = null;
  itemRekom: AngularFireList<Item> = null;
  itemMakananRef: AngularFireList<Item> = null;
  itemPakaianRef: AngularFireList<Item> = null;
  itemAksesorisRef: AngularFireList<Item> = null;
  itemSepatuRef: AngularFireList<Item> = null;
  itemPeralatanRef: AngularFireList<Item> = null;
  itemHobiRef: AngularFireList<Item> = null;
  itemPerawatanRef: AngularFireList<Item> = null;
  itemKesehatanRef: AngularFireList<Item> = null;
  cartRef: AngularFireList<Item> = null;
  tmpRef: any;
  tmpItemRef: any;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.itemDiskonRef = db.list(this.dbPath, ref=> ref.orderByChild("diskon").equalTo(1).limitToFirst(15));
    this.itemRekom = db.list(this.dbRekom);
    this.itemMakananRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Makanan & Minuman'));
    this.itemPakaianRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Pakaian'));
    this.itemAksesorisRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Aksesoris'));
    this.itemSepatuRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Sepatu'));
    this.itemPeralatanRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Peralatan'));
    this.itemHobiRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Hobi & Koleksi'));
    this.itemPerawatanRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Perawatan & Kecantikan'));
    this.itemKesehatanRef = db.list(this.dbPath, ref => ref.orderByChild('kategori').equalTo('Kesehatan'));
   }

   getAll(kategori): AngularFireList<Item> {
     switch (kategori)
     {
      case 'makanan': return this.itemMakananRef;
      case 'pakaian': return this.itemPakaianRef;
      case 'aksesoris': return this.itemAksesorisRef;
      case 'sepatu': return this.itemSepatuRef;
      case 'peralatan': return this.itemPeralatanRef;
      case 'hobi': return this.itemHobiRef;
      case 'perawatan': return this.itemPerawatanRef;
      case 'kesehatan': return this.itemKesehatanRef;
      default: return this.itemRef;
    }
  }

  getItemDiskon(): AngularFireList<Item> {
    return this.itemDiskonRef;
  }

  getDetailItem(id): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('id').equalTo(id));
  }

  getAllRekom(userid: string): AngularFireList<Item> {
    this.dbRekom = '/rekomendasi/' + userid;
    return this.db.list(this.dbRekom);
  }

  getAllRekomItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('id').equalTo(id));
  }

  getAllWishlist(userid: string): AngularFireList<Item> {
    this.dbWish = '/wishlist/' + userid;
    return this.db.list(this.dbWish);
  }

  getAllWishlistItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('id').equalTo(id));
  }

  getAllCart(userid: string): AngularFireList<Item> {
    this.dbCart = '/cart/' + userid;
    return this.db.list(this.dbCart);
  }

  getAllCartItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('id').equalTo(id));
  }

  createWishlist(itemid: string, userid: string) {
    this.tmpRef = this.db.list('/wishlist');
    this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.update(userid + '/' + this.tmpItemRef, {
      id: itemid
    });
  }

  deleteWishlist(itemid: string, userid: string) {
    this.tmpRef = this.db.list('/wishlist');
    this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.remove(userid + '/' + this.tmpItemRef, {
      id: itemid
    });
  }

  createCart(itemid: string, userid: string) {
    this.tmpRef = this.db.list('/cart');
    this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.update(userid + '/' + this.tmpItemRef, {
      id: itemid,
      qty: 1
    });
  }

  updateCart(itemid: string, userid: string, quantity:string) {
    this.tmpRef = this.db.list('/cart');
    this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.update(userid + '/' + this.tmpItemRef, {
      qty: quantity
    });
  }

  checkoutCart(userid: string, totalcart:string) {
    this.tmpRef = this.db.list('/cart');
    // this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.update(userid, {
      total: totalcart
    });
  }

  deleteCart(itemid: string, userid: string) {
    this.tmpRef = this.db.list('/cart');
    this.tmpItemRef = '/item-' + itemid;
    return this.tmpRef.remove(userid + '/' + this.tmpItemRef, {
      id: itemid
    });
  }

}
