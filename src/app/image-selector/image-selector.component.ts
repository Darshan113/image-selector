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
   @Input()
  selectionLimitVal!: number;
  loading: boolean = true; 
  totalImagesLoaded: number = 0;
   
   constructor(private imageDataService : ImageDataService) {}
   
   ngOnInit(): void {
      this.imageDataService.getImages().subscribe(data => {
        this.images = data
      })
  }
  

  onSelect(image : Image){
      if (this.selectedImages.includes(image)) {
        this.selectedImages = this.selectedImages.filter(selectedImage => selectedImage != image);
      } else {
        if (this.selectionLimitVal !== undefined && this.selectionLimitVal > this.selectedImages.length) {
          this.selectedImages.push(image);
        }
      }
    
  }

  imageLoaded() {
    this.totalImagesLoaded++;
    if (this.totalImagesLoaded === this.images.length) {
      this.loading = false; 
    }
  }
} 
