import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('https://www.mediawiki.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: term,
        format: 'json',
        utf8: '1',
        origin: '*'
      },
    });
  }
}
