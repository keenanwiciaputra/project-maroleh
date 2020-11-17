import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    width: 380,
    centeredSlides: true
  };

  constructor(private router: Router) {}

  goToCartPage() {
    this.router.navigateByUrl('/cart');
  }
}
