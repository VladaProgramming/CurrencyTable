import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DataService } from './service/data.service';
import { TableDataComponent } from './components/table-data/table-data.component';
import { AddCurrencyComponent } from './components/add-currency/add-currency.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableDataComponent,
    AddCurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
