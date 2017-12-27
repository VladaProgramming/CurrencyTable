import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Currency } from '../models/currency';


@Injectable()
export class DataService {

  currencyes: Currency[];

  constructor(private http: Http) {
    this.currencyes = [
      {
        "id": 38,
        "symbol": "CAD",
        "name": "Canadian dollar"
      },
      {
        "id": 8,
        "symbol": "CZK",
        "name": "Czech koruna"
      },
      {
        "id": 37,
        "symbol": "DKK",
        "name": "Danish crone"
      },
      {
        "id": 27,
        "symbol": "EUR",
        "name": "European euro"
      },
      {
        "id": 15,
        "symbol": "NZD",
        "name": "New Zealand dollar"
      },
      {
        "id": 30,
        "symbol": "GBP",
        "name": "Pound sterling"
      },
      {
        "id": 35,
        "symbol": "RUB",
        "name": "Russian ruble"
      },
      {
        "id": 1,
        "symbol": "RSD",
        "name": "Serbian dinar"
      },
      {
        "id": 39,
        "symbol": "CHF",
        "name": "Swiss franc"
      },
      {
        "id": 2,
        "symbol": "USD",
        "name": "US Dollar"
      }
    ];

    console.log('Data service connected...');
  }

  getCurrencyes() {
    return this.currencyes;
  }

  addCurrency(currency: Currency) {
    this.currencyes.unshift(currency);
  }
  removeCurrency(value: Currency) {
    for (let i = 0; i < this.currencyes.length; i++) {
      if (value === this.currencyes[i]) {
        this.currencyes.splice(i, 1);
      }
    }
  }

}
