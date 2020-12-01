import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  items: any;
  tmp: string;
  tmp_array: string[];
  daerah_tmp: any;
  daerah: any;
  kategori: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('kategori')) { return; } 
      this.tmp = paramMap.get('kategori');
      this.tmp_array = this.tmp.split(".");
      this.daerah_tmp = this.tmp_array[0];
      this.kategori = this.tmp_array[1];
      this.daerah = this.daerah_tmp.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());

      this.itemsService.getAll(this.kategori).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      ).subscribe( data => {
        this.items = data;
        console.log(data);
      });
    });
  }

}
