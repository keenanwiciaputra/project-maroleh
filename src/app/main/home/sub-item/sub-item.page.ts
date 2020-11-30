import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.page.html',
  styleUrls: ['./sub-item.page.scss'],
})
export class SubItemPage implements OnInit {
  items: any;

  constructor(
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.itemsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe( data => {
      this.items = data;
      console.log(data);
    });
  }
}
