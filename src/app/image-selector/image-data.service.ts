import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Image } from './image';

interface ResponseData {
  images: Image[];
}

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imagesUrl = './assets/images.json'

  constructor(private http : HttpClient) { } 

  
  getImages() : Observable<Image[]> {
    return this.http.get<ResponseData>(this.imagesUrl).pipe(
      map(response => response.images)
    )
  }
}
