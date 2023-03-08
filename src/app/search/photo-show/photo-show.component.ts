import { PhotoService } from './../../photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  photoUrl = '';

  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto()
  }
  
  fetchPhoto() {
    this.photoService.getPhoto().subscribe((photoUrl) => {
      this.photoUrl = photoUrl;
    });
  }
}
