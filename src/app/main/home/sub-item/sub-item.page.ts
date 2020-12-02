import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { debounceTime, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sub-item',
  templateUrl: './sub-item.page.html',
  styleUrls: ['./sub-item.page.scss'],
})
export class SubItemPage implements OnInit {
  items: any;
  resetItems: any;
  searchControl: FormControl;

  constructor(
    private itemsService: ItemService,
    private activatedRoute: ActivatedRoute
  ) { this.searchControl = new FormControl(); }

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
        this.resetItems = data;
        console.log(data);

        this.setFilteredItems("");
        this.searchControl.valueChanges.pipe(debounceTime(700)).subscribe(search => {
          this.setFilteredItems(search);
        });
      });
    });

  }

  setFilteredItems(searchTerm) {
    this.items = this.resetItems;
    this.items = this.items.filter(item => {
      return item.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

}
