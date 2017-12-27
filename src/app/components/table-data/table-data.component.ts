import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import 'rxjs/add/operator/map';
import * as data from './example.json';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  currencyes = [];
  @Input() value;
  name;
  symbol;


  constructor(private _DataService: DataService) { }

  ngOnInit() {
    console.log(this.value);

  }

  edit(event) {
    event.target.parentElement.nextElementSibling.childNodes[0].removeAttribute('readonly');
    event.target.parentElement.nextElementSibling.nextElementSibling.childNodes[0].removeAttribute('readonly');
  }
  removeCurrency(value) {
    this._DataService.removeCurrency(value);
  }

}
