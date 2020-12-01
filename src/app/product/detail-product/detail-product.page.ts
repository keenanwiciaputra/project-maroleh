import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
