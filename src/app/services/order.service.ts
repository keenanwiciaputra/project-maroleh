import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Order } from './order';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dbPath = '/order';



  constructor(
    private db: AngularFireDatabase
  ) { }

  getOrderUser(userid : string): AngularFireList<Order> {
    this.dbPath = '/order/'+userid; 
    return this.db.list(this.dbPath);
  }
  
 }


