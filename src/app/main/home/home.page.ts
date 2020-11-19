import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segmentChecker : boolean;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width:380,
    centeredSlides: true
  };

  slideOpts2 = {
    initialSlide: 0,
    speed: 400,
    width:170,
    centeredSlides: true
  };

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    this.segmentChecker = !this.segmentChecker;
  }

  constructor() { }

  ngOnInit() {
  }

}
