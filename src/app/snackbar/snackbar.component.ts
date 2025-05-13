import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';
import { DisplayComponent } from '../display/display.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImagesComponent } from '../images/images.component';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, DisplayComponent, ImagesComponent],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() photo: Photos | undefined;
  private snackBar = inject(MatSnackBar);

  showSnackbar(message: string, action: string = 'Close', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

getImageId() {
  return String(this.photo?.id);
}
}
