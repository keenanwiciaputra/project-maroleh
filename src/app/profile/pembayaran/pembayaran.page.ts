import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.page.html',
  styleUrls: ['./pembayaran.page.scss'],
})
export class PembayaranPage implements OnInit {
  private displayMode = 1;

  constructor() { }

  ngOnInit() {
  }
  
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
