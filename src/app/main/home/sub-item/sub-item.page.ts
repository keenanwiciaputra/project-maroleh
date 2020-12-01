import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.page.html',
  styleUrls: ['./sub-item.page.scss'],
})
export class SubItemPage implements OnInit {
  items: any;

  constructor(
    private itemsService: ItemService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('kategori')) { return; } 
      const kategori = paramMap.get('kategori');
      console.log(kategori);
      this.itemsService.getAll(kategori).snapshotChanges().pipe(
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
