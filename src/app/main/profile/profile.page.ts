import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width:170,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() {
  }

}
