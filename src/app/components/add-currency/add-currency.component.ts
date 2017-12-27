import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {
  @Output() currencyAdded = new EventEmitter<Currency>();
  id;
  name;
  symbol;

  constructor() { }

  ngOnInit() {
  }

  addCurrency() {
    this.currencyAdded.emit({ id: this.id, name: this.name, symbol: this.symbol });
  }

}
