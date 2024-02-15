import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import other components
import { DropdownComponent } from './dropdown/dropdown.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,ImageSelectorComponent ,DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  selectionLimit : number = 5

  changeValue(value : number){
    this.selectionLimit = value
  }
  
}
