import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-sub-city',
  templateUrl: './sub-city.page.html',
  styleUrls: ['./sub-city.page.scss'],
})
export class SubCityPage implements OnInit {
  daerah: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('daerah')) { return; } 
      this.daerah = paramMap.get('daerah');
      this.daerah = this.daerah.replace('-',' ');
      console.log(this.daerah);
    });
  }

}
