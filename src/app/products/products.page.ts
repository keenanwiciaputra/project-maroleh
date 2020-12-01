import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  detailItems: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width:420,
    centeredSlides: true
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    width:170,
    centeredSlides: true
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) { return; } 
      const itemId = paramMap.get('id');
      console.log(itemId);
      this.itemsService.getDetailItem(itemId).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      ).subscribe( data => {
        this.detailItems = data;
        console.log(data);
      });
    });
  }
}
