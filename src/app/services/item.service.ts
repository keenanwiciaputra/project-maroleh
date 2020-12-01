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
    this.itemRef = db.list(this.dbPath);
    this.itemRekom = db.list(this.dbRekom);
    this.itemMakananRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Makanan & Minuman"));
    this.itemPakaianRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Pakaian"));
    this.itemAksesorisRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Aksesoris"));
    this.itemSepatuRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Sepatu"));
    this.itemPeralatanRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Peralatan"));
    this.itemHobiRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Hobi & Koleksi"));
    this.itemPerawatanRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Perawatan & Kecantikan"));
    this.itemKesehatanRef = db.list(this.dbPath, ref=> ref.orderByChild("kategori").equalTo("Kesehatan"));
   }

   getAll(kategori): AngularFireList<Item> {
     switch(kategori)
     {
      case "makanan": return this.itemMakananRef;
      case "pakaian": return this.itemPakaianRef;
      case "aksesoris": return this.itemAksesorisRef;
      case "sepatu": return this.itemSepatuRef;
      case "peralatan": return this.itemPeralatanRef;
      case "hobi": return this.itemHobiRef;
      case "perawatan": return this.itemPerawatanRef;
      case "kesehatan": return this.itemKesehatanRef;
      default: return this.itemRef;
    }
  }

  getDetailItem(id): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref=> ref.orderByChild("id").equalTo(id));
  }

  getAllRekom(userid : string): AngularFireList<Item> {
    this.dbRekom = '/rekomendasi/'+userid; 
    return this.db.list(this.dbRekom);
  }

  getAllRekomItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref=> ref.orderByChild("id").equalTo(id));
  }

  getAllWishlist(userid : string): AngularFireList<Item> {
    this.dbWish = '/wishlist/'+userid; 
    return this.db.list(this.dbWish);
  }

  getAllWishlistItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref=> ref.orderByChild("id").equalTo(id));
  }

  getAllCart(userid : string): AngularFireList<Item> {
    this.dbCart = '/cart/'+userid; 
    return this.db.list(this.dbCart);
  }

  getAllCartItem(id: string): AngularFireList<Item> {
    return this.db.list(this.dbPath, ref=> ref.orderByChild("id").equalTo(id));
  }

  createCart(itemid:string, userid:string) {
    this.tmpRef = this.db.list('/cart');
    // console.log(this.tmpRef);
    // if(this.tmpItemRef !== null)
    // {
    //   console.log("ADA ISINYA");
    // } else console.log("KOSONG");
    this.tmpItemRef = '/item-'+itemid;
    // console.log(this.tmpRef.query.path);
    return this.tmpRef.update(userid+'/'+this.tmpItemRef, {
      id: itemid
    });
  }

}
