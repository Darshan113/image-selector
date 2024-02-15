import { Component, OnInit , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDataService } from './image-data.service';
import { Image } from './image';


@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css',
  providers : [ImageDataService]
})

export class ImageSelectorComponent implements OnInit {
   images : Image[] = []
   selectedImages : Image[] = []

   @Input() selectionLimitVal!: number;

  loading: boolean = true; 
  totalImagesLoaded: number = 0;
   

   constructor(private imageDataService : ImageDataService) {}
   

   ngOnInit(): void {
    // setting images data
      this.imageDataService.getImages().subscribe(data => {
        this.images = data
      })
  }
  

  // handing click event on each images
  onSelect(image : Image){
      if (this.selectedImages.includes(image)) {
        this.selectedImages = this.selectedImages.filter(selectedImage => selectedImage != image);
      } else {
        if (this.selectionLimitVal !== undefined && this.selectionLimitVal > this.selectedImages.length) {
          this.selectedImages.push(image);
        }
      }
    
  }

  // to  see  if all images are loaded or not
  imageLoaded() {
    this.totalImagesLoaded++;
    if (this.totalImagesLoaded === this.images.length) {
      this.loading = false; 
    }
  }
} 
