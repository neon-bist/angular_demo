import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface WikipediaResponse {
  query:{
    search:{
      pageid: number;
      wordcount: number;
      title: string;
      snippet: string;
    }[]
  }
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get<WikipediaResponse>('https://www.mediawiki.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: term,
        format: 'json',
        utf8: '1',
        origin: '*'
      },
    })
    .pipe(
      map(response=>response?.query?.search)
    );
  }
}
