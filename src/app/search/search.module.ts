import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { CollectionsModule } from '../collections/collections.module';


@NgModule({
  declarations: [
    SearchBarComponent,
    PageListComponent,
    SearchHomeComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CollectionsModule
  ]
})
export class SearchModule { }
