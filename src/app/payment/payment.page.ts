import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ItemService} from '../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, map} from 'rxjs/operators';
import {BankService} from '../services/bank.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  bank: any;

  constructor(
      private banksService: BankService,
      private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.banksService.getAll().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.bank = data;
      console.log(data);
    });
  }
}
