import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface UnsplashResponse {
  urls:{
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID ZUgUFBjNB3GGGq6a100diYAZ_Y1F-ei5MSCvjktdid0'
      }
    }).pipe(
      map(response=>response?.urls?.regular)
    );
  }
}
