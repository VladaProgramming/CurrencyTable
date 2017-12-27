import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import 'rxjs/add/operator/map';

import { TableDataComponent } from '../table-data/table-data.component';

import { Currency } from '../../models/currency';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

currencyes: Currency [];

  constructor(private _DataService: DataService) { }

  ngOnInit() {
    this.currencyes = this._DataService.getCurrencyes();
    const elements = document.getElementsByClassName('notEditable');
    }

    addCurrency(currency: Currency) {
      this._DataService.addCurrency(currency);
    }

}
/*
edit(event) {

  event.target.parentElement.nextElementSibling.childNodes[0].removeAttribute('readonly');
  event.target.parentElement.nextElementSibling.nextElementSibling.childNodes[0].removeAttribute('readonly');
}
delete(event) {

}
*/
