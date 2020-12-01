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

}
