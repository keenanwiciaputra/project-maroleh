import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proses',
  templateUrl: './proses.page.html',
  styleUrls: ['./proses.page.scss'],
})
export class ProsesPage implements OnInit {
  private displayMode = 1;

  constructor() { }

  ngOnInit() {
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

}
