import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';
import { MatCardModule } from '@angular/material/card'; 
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, MatCardModule, SnackbarComponent], 
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  @Input() photos: Photos[] = [];
  @Output() clickOnCardEvent = new EventEmitter<string>();

  

  onCardClick(photo : Photos) {
    this.clickOnCardEvent.emit(`Card with ID ${photo.id} clicked!`);
  }
}
