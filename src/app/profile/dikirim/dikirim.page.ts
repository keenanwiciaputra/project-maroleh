import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dikirim',
  templateUrl: './dikirim.page.html',
  styleUrls: ['./dikirim.page.scss'],
})
export class DikirimPage implements OnInit {
  private displayMode = 1;

  constructor() { }

  ngOnInit() {
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
