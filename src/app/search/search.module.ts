import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { CollectionsModule } from '../collections/collections.module';
import { PhotoShowComponent } from './photo-show/photo-show.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    PageListComponent,
    SearchHomeComponent,
    PhotoShowComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CollectionsModule
  ]
})
export class SearchModule { }
