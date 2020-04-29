import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClient, Observable, forkJoin ],
  declarations: [ AppComponent, SearchPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
