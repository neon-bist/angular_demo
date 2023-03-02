import { Component } from '@angular/core';
import { WikipediaService } from 'src/app/wikipedia.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css'],
})
export class SearchHomeComponent {
  pages = [];

  constructor(private wiki: WikipediaService) {}

  onTerm(term: string) {
    this.wiki.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
