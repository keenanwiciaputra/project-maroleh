import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  items: any;
  resetItems: any;
  searchControl: FormControl;

  constructor(
    private itemsService: ItemService
  ) { this.searchControl = new FormControl(); }

  ngOnInit() {
    this.itemsService.getAll("default").snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    ).subscribe( data => {
      this.resetItems = data;
      console.log(data);

      this.setFilteredItems("");
      this.searchControl.valueChanges.pipe(debounceTime(700)).subscribe(search => {
        this.setFilteredItems(search);
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
