import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
  styles: [`:host ::ng-deep .searchmatch{font-weight: bold}`]
})
export class PageListComponent {
  @Input() pages:any = []
  headers = [
    {key: 'title', label: 'Title'},
    {key: 'wordcount', label: 'Word Count'},
    {key: 'snippet', label: 'Snippet'},
  ]
}
