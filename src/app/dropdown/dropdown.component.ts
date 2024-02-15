import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  dropdownValues = [5,10,15,20]
  selectedValue = 5

  @Output() valueChange = new EventEmitter()

  // handling change event of select 
  changeValue(){
    this.valueChange.emit(this.selectedValue)
  }
}
