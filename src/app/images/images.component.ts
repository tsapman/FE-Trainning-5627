import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, MatCardModule, SnackbarComponent], // Add MatCardModule here
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  @Input() photos: Photos[] = [];
}
